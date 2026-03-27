import express from "express";
import { createStudent, getAllStudents, getStudentById } from "../../controllers/studentsController.js"

const router = express.Router()

studentRouter.get("/", getAllStudents)
studentRouter.get("/:id", getStudentById)
studentRouter.post("/", createStudent)
studentRouter.put("/:id", )
studentRouter.delete("/:id", )

export default studentRouter 