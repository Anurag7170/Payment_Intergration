import express from "express";
import { config } from "dotenv";
import Razorpay from "razorpay";
import router from "./routes/PaymentRouter.js";
import { connectDB } from "./config/database.js";
import cors from "cors";
config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//api mounting
app.use("/api", router);

export const instance = new Razorpay({
  key_id: process.env.API_KEY,
  key_secret: process.env.API_SECRET,
});

connectDB();
app.listen(process.env.PORT, () => {
  console.log(`App is Listenting ${process.env.Port}`);
});

