import express from "express"
import * as studentsController from "../controllers/studentController.js"
import { authCheck } from "../middleware/auth.js"
import { validateStudent } from "../middleware/auth.js"

// Router instance
const studentRouter = express.Router()
studentRouter.post("/login", loginStudent)

// The base path, /books, will be defined in index.js

studentRouter.get('/', studentsController.getAllStudents)
studentRouter.get('/:id', studentsController.findStudentById)
studentRouter.post('/', studentsController.createStudent)
studentRouter.put('/:id', studentsController.updateStudent)
studentRouter.delete('/:id', studentsController.deleteStudent)

export default studentRouter;
