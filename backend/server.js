import express from "express";
import cors from "cors";
import { ConnectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import "dotenv/config";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
import { clearExpiredOrders } from "./controllers/orderController.js"; // Ensure this path is correct
import cron from "node-cron";

// app config
const app = express();
const port = process.env.PORT || 4000;

// middleware
app.use(express.json());
app.use(cors());

// db connection
ConnectDB();
// Schedule the clearExpiredOrders function to run every day at midnight
cron.schedule("0 0 * * *", () => {
  console.log("Clearing expired orders...");
  clearExpiredOrders();
});

// api endpints
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

// Call your notification function here
// sendNotification(orderData);

app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => {
  console.log(`Server Started on http://localhost:${port}`);
});
