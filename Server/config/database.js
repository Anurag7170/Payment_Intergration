import mongoose from "mongoose";
import { config } from "dotenv";
config();

export const connectDB = async () => {
  const { connection } = await mongoose.connect(process.env.MONGO_URI);
  console.log(`Mongodb is connected with ${connection.host}`);
}