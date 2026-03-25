import express from "express";
import {
  createStudent,
  getAllStudents,
  getStudentById,
} from "../controllers/studentsController.js";

const studentRouter = express.Router();

studentRouter.get("/", getAllStudents);
studentRouter.get("/:id", getStudentById);
// add middleware checks !!!!! 🚨‼️
studentRouter.post("/", createStudent);
studentRouter.put("/:id", getAllStudents);
studentRouter.delete("/:id", getAllStudents);

export default studentRouter;
