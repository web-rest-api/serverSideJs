import express from "express"
import {
  getAllCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
} from "../controllers/CourseController.js"
import { authCheck } from "../middleware/auth-middleware.js"

const courseRouter = express.Router()

// Apply authCheck to all routes in this router
courseRouter.use(authCheck)

courseRouter.get("/", getAllCourses)
courseRouter.get("/:id", getCourseById)
courseRouter.post("/", createCourse)
courseRouter.put("/:id", updateCourse)
courseRouter.delete("/:id", deleteCourse)

export default courseRouter