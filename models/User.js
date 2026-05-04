import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:     { type: String, required: true },
    email:    { type: String, required: true, unique: true },
    password: { type: String, required: true },
    major:    { type: String },
    gpa:      { type: Number },
    imageUrl: { type: String },
});

const User = mongoose.model("User", userSchema);

export default User;
