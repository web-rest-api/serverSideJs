import express from "express"
import {
    createStudent,
    loginStudent,
    getAllStudents,
    getStudentById,
    updateStudent,
    deleteStudent,
} from "../controllers/studentsController.js"
import multerConfig from "../middleware/multer-config.js"
import { validateStudent } from "../middleware/validateStudent.js"

import { authCheck } from "../middleware/auth-middleware.js"

const studentRouter = express.Router();

studentRouter.post("/login", loginStudent);

studentRouter.post(
    "/signup",
    (req, res, next) => {
    multerConfig(req, res, (err) => {
        if (err) {
            console.error("Multer error:", err)
            return res.status(400).json({error: err.message})
        }
        next()
    })
  },
  validateStudent,
  createStudent,
);

// protected route
studentRouter.get("/", authCheck, getAllStudents)
studentRouter.get("/:id", getStudentById)
studentRouter.put("/:id", updateStudent)
studentRouter.delete("/:id", deleteStudent)

export default studentRouter