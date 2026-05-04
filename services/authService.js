import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const register = async (name, email, password, major, gpa, imageUrl) => {
    const existingUser = await User.findOne({email});

    if (existingUser) throw new Error("Email already in use");

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({name, email, password: hashedPassword, major, gpa, imageUrl});

    return {
        id: user._id,
        name: user.name,
        email: user.email,
        major: user.major,
        gpa: user.gpa,
        imageUrl: user.imageUrl
    };
};

export const login = async (email, password) => {
    const user = await User.findOne({email});

    if (!user) throw new Error("Invalid email or password");

    const match = await bcrypt.compare(password, user.password);
    if (!match) throw new Error("Invalid email or password");

    const token = jwt.sign(
        {userId: user._id, email: user.email},
        process.env.JWT_SECRET,
        {expiresIn: "1h"}
    );

    return {token};
};
