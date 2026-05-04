import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
    {
        title:       { type: String, required: true },
        description: { type: String, required: true },
        credits:     { type: Number, required: true, min: [1, "Credits minimum value is 1"], max: [10, "Credits maximum value is 1"] },
        instructor:  { type: String, required: true },
    },
    { timestamps: true }
);

export default mongoose.model("Course", courseSchema);