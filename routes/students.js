import express from "express";
import {
    getAllStudents,
    getStudentById,
    createStudentHandler,
    updateStudentHandler,
    deleteStudentHandler,
} from "../controllers/studentsController.js";
import authenticate from "../middleware/authenticate.js";

const studentRouter = express.Router();

studentRouter.use(authenticate); // all student routes require a valid token

studentRouter.get("/", getAllStudents);
studentRouter.get("/:id", getStudentById);
studentRouter.post("/", createStudentHandler);
studentRouter.put("/:id", updateStudentHandler);
studentRouter.delete("/:id", deleteStudentHandler);

export default studentRouter;
