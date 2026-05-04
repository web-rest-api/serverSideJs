import mongoose from "mongoose";
import "dotenv/config";

// extract mongodb atlas cluster connection string
const MONGO_URI = process.env.MONGO_URI;

// initiate connection to mongoDB atlas cluster connection string
export const connectToMongoDB = async () => {
    try {
        await mongoose.connect(MONGO_URI)
        console.log("Connected to MongoDB")
    } catch (error) {
        console.error(`Failed connection to MongoDB: ${error}`)
        process.exit(1)  // terminate process synchronously
    }
};