import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB");
    } catch (err) {
        // if connection fails, no need to run server -- meaningless to run
        console.error("MongoDB connection failed:", err.message);
        process.exit(1);
    }
};

export default connectDB;
