import express from "express";
import {
    getAllStudents,
    getStudentById,
    createStudentHandler,
    updateStudentHandler,
    deleteStudentHandler,
} from "../controllers/studentsController.js";

const studentRouter = express.Router();

studentRouter.get("/", getAllStudents);
studentRouter.get("/:id", getStudentById);
studentRouter.post("/", createStudentHandler);
studentRouter.put("/:id", updateStudentHandler);
studentRouter.delete("/:id", deleteStudentHandler);

export default studentRouter;
