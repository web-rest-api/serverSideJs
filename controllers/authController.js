import jwt from "jsonwebtoken";
import { register, login } from "../services/authService.js";

export const registerHandler = async (req, res) => {
    try {
        const { name, email, password, major, gpa } = req.body;
        const imageUrl = req.file ? `uploads/${req.file.filename}` : null;
        const user = await register(name, email, password, major, gpa, imageUrl);
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "24h" });
        res.status(201).json({ token, user: { id: user.id, email: user.email } });
    } catch (err) {
        res.status(400).json({ msg: err.message });
    }
};

export const loginHandler = async (req, res) => {
    try {
        const { email, password } = req.body;
        const result = await login(email, password);
        res.status(200).json(result);
    } catch (err) {
        res.status(401).json({ msg: err.message });
    }
};
