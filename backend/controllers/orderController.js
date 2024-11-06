import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from "stripe";
import cron from "node-cron";
import twilio from "twilio";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const twilioClient = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

// Function to send an SMS notification
const sendSMSNotification = async (order) => {
  const message = `New Order Received:
  Name: ${order.firstName} ${order.lastName}
  Phone: ${order.phone}
  Items: ${order.items
    .map((item) => `${item.name} x${item.quantity}`)
    .join(", ")}
  Total Amount: $${(order.amount / 100).toFixed(2)}`;

  try {
    const response = await twilioClient.messages.create({
      body: message,
      from: process.env.TWILIO_PHONE_NUMBER, // Twilio number
      to: process.env.NOTIFICATION_PHONE_NUMBER, // Number to receive notifications
    });
    console.log(`SMS sent successfully: ${response.sid}`);
  } catch (error) {
    console.error("Error sending SMS:", error);
  }
};

// Function to clear expired orders
export const clearExpiredOrders = async () => {
  const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000); // Current time - 24 hours
  try {
    const result = await orderModel.deleteMany({ date: { $lt: oneDayAgo } }); // Deletes orders older than one day
    console.log(
      `Expired orders cleared: ${result.deletedCount} orders deleted.`
    );
  } catch (error) {
    console.log("Error clearing expired orders:", error);
  }
};

// placing user order from frontend
const placeOrder = async (req, res) => {
  const frontend_url = "https://selam-cafe.netlify.app/";

  try {
    const newOrder = new orderModel({
      userId: req.body.userId,
      items: req.body.items,
      amount: req.body.amount,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phone: req.body.phone,
    });

    await newOrder.save();
    await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });

    // Send SMS notification about the new order
    await sendSMSNotification(newOrder);

    const line_items = req.body.items.map((item) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: item.name,
        },
        unit_amount: Math.round(item.price * 100), // Round to the nearest integer
      },
      quantity: item.quantity,
    }));

    // Add delivery charges (if any)
    line_items.push({
      price_data: {
        currency: "usd",
        product_data: {
          name: "Delivery Charges",
        },
        unit_amount: Math.round(0 * 100), // Delivery charge is 0, so no rounding needed
      },
      quantity: 1,
    });

    const session = await stripe.checkout.sessions.create({
      line_items: line_items,
      mode: "payment",
      success_url: `${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
      cancel_url: `${frontend_url}/verify?success=false&orderId=${newOrder._id}`,
    });

    res.json({ success: true, session_url: session.url });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

const verifyOrder = async (req, res) => {
  const { orderId, success } = req.body;
  try {
    if (success === "true") {
      await orderModel.findByIdAndUpdate(orderId, { payment: true });
      res.json({ success: true, message: "Paid" });
    } else {
      await orderModel.findByIdAndDelete(orderId);
      res.json({ success: false, message: "Not Paid" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// user orders for frontend
const userOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({ userId: req.body.userId });
    res.json({ success: true, data: orders });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// listing order for admin panel
const listOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({});
    res.json({ success: true, data: orders });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

// api for updating order status
const updateStatus = async (req, res) => {
  try {
    await orderModel.findByIdAndUpdate(req.body.orderId, {
      status: req.body.status,
    });
    res.json({ success: true, message: "Status Updated" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

export { placeOrder, verifyOrder, userOrders, listOrders, updateStatus };
