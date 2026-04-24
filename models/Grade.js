import mongoose from "mongoose";

const gradeSchema = new mongoose.Schema({
    studentId: { type: mongoose.Schema.Types.ObjectId, ref: "Student", required: true },
    subject:   { type: String, required: true },
    score:     { type: Number, required: true, min: 0, max: 100 },
    semester:  { type: String, required: true },
});

const Grade = mongoose.model("Grade", gradeSchema);

export default Grade;
