import express from "express";
import {
    getAllGrades,
    getGradeById,
    getGradesByStudent,
    createGradeHandler,
    updateGradeHandler,
    deleteGradeHandler,
} from "../controllers/gradesController.js";
import authenticate from "../middleware/authenticate.js";

const gradeRouter = express.Router();

gradeRouter.use(authenticate);

gradeRouter.get("/", getAllGrades);
gradeRouter.get("/student/:studentId", getGradesByStudent);
gradeRouter.get("/:id", getGradeById);
gradeRouter.post("/", createGradeHandler);
gradeRouter.put("/:id", updateGradeHandler);
gradeRouter.delete("/:id", deleteGradeHandler);

export default gradeRouter;
