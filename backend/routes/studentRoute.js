import express from "express"
import * as studentController from "../controllers/studentController.js"
import authN from "../middleware/auth-middleware.js"

// Router instance
const studentRouter = express.Router()

studentRouter.use(authN)

studentRouter.get('/', studentController.getAllStudents)
studentRouter.get('/:id', studentController.findStudentById)
studentRouter.post('/', studentController.createStudent)
studentRouter.put('/:id', studentController.updateStudent)
studentRouter.delete('/:id', studentController.deleteStudent)

export default studentRouter;
