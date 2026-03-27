import express from "express";
import { createStudent, getAllStudents, getStudentById, updateStudent, deleteStudent} from "../controllers/studentsController.js"

const studentRouter = express.Router();

studentRouter.get("/", getAllStudents)
studentRouter.get("/:id", getStudentById)
// add middleware checks !!!!! 🚨‼️- Yes it's done
studentRouter.post("/", createStudent)
studentRouter.put("/:id", updateStudent)
studentRouter.delete("/:id", deleteStudent)

export default studentRouter 