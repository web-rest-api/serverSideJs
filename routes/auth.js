import express from "express";
import { registerHandler, loginHandler } from "../controllers/authController.js";
import multerConfig from "../middleware/multer-config.js";
import { validateStudent } from "../middleware/validateStudent.js";

const authRouter = express.Router();

authRouter.post(
  "/register",
  (req, res, next) => {
    multerConfig(req, res, (err) => {
      if (err) return res.status(400).json({ message: err.message });
      next();
    });
  },
  validateStudent,
  registerHandler
);
authRouter.post("/login", loginHandler);

export default authRouter;
