import express from "express";
import { registerHandler, loginHandler } from "../controllers/authController.js";

const authRouter = express.Router();

authRouter.post("/register", registerHandler);
authRouter.post("/login", loginHandler);

export default authRouter;
