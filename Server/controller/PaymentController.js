import { instance } from "../index.js";
import crypto from "crypto";
import { config } from "dotenv";
import { Payment } from "../model/PaymentModal.js";
config();

export const checkout = async (req, res) => {
  try {
    var options = {
      amount: Number(req.body.amount * 100), // amount in the smallest currency unit
      currency: "INR",
    };
    const order = await instance.orders.create(options);
    // console.log(order);
    res.json({
      sucess: true,
      data: order,
    });
  } catch (error) {
    console.log(error);
  }
};
export const paymentVerification = async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
      req.body;

    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac("sha256", "rSE87gGFrnREfAmaPxH2mw6e")
      .update(body.toString())
      .digest("hex");

      const isAuthentic = expectedSignature === razorpay_signature;

      if (isAuthentic) {
        // Database comes here
    
        await Payment.create({
          razorpay_order_id,
          razorpay_payment_id,
          razorpay_signature,
        });
    
        res.redirect(
          `http://localhost:5173/paymentsuccess?ref=${razorpay_payment_id}`
        );
      } else {
        res.status(400).json({
          success: false,
        });
      }
  } catch (error) {
    console.log(error);
  }
};
