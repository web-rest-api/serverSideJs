import express from "express";
import {
  getAllCourses,
  getCourseById,
  createCourseHandler,
  updateCourseHandler,
  deleteCourseHandler,
} from "../controllers/coursesController.js";
import authenticate from "../middleware/authenticate.js";

const courseRouter = express.Router();

courseRouter.use(authenticate);

courseRouter.get("/", getAllCourses);
courseRouter.get("/:id", getCourseById);
courseRouter.post("/", createCourseHandler);
courseRouter.put("/:id", updateCourseHandler);
courseRouter.delete("/:id", deleteCourseHandler);

export default courseRouter;
