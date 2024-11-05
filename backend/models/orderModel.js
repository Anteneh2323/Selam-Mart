import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  items: { type: Array, required: true },
  amount: { type: Number, required: true },
  status: { type: String, default: "Food Processing" },
  date: { type: Date, default: Date.now },
  payment: { type: Boolean, default: false },
  firstName: { type: String, required: true }, // Change 'name' to 'firstName'
  lastName: { type: String, required: true }, // Add lastName field
  phone: { type: String, required: true },
});

// Create or use the existing order model
const orderModel =
  mongoose.models.order || mongoose.model("order", orderSchema);

export default orderModel;
