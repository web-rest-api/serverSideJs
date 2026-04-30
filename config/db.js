import mongoose from "mongoose";
import "dotenv/config";

// TODO: move connection string to .env and load with dotenv
const MONGO_URI = process.env.MONGO_URI;

export const connectToMongoDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Could not connect to MongoDB", err);
    process.exit(1);
  }
};