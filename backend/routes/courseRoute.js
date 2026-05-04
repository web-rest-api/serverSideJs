import express from "express";
import * as courseController from "../controllers/courseController.js";
import authN from "../middleware/auth-middleware.js";

const courseRouter = express.Router();

courseRouter.use(authN);

courseRouter.get("/", courseController.getAllCourses);
courseRouter.get("/:id", courseController.getCourseById);
courseRouter.post("/", courseController.createCourse);
courseRouter.put("/:id", courseController.updateCourse);
courseRouter.delete("/:id", courseController.deleteCourse);

export default courseRouter;