import mongoose from "mongoose";

const roomSchema = new mongoose.Schema(
    {
        number:   { type: String, required: true, unique: true },
        building: { type: String, required: true },
        capacity: { type: Number, required: true },
        type:     { type: String, required: true },
    },
    { timestamps: true }
);

export default mongoose.model("Room", roomSchema);