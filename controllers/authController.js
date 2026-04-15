import { register, login } from "../services/authService.js";

export const registerHandler = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await register(name, email, password);
        res.status(201).json(user);
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
