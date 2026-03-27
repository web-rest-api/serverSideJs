import express from "express";
import { createStudent, getAllStudents, getStudentById } from "../controllers/studentsController.js"

const studentRouter = express.Router();

studentRouter.get("/", getAllStudents)
studentRouter.get("/:id", getStudentById)
// add middleware checks !!!!! 🚨‼️- Yes it's done
studentRouter.post("/", createStudent)
// studentRouter.put("/:id", )
// studentRouter.delete("/:id", )

export default studentRouter 