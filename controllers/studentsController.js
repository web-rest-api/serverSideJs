import jwt from "jsonwebtoken"
import { findAllStudents,
    findStudentById,
    createStudentService,
    loginStudentService,
    updateStudentService,
    deleteStudentService
} from "../services/studentServiceMongoDB.js"

export const getAllStudents = async (req, res) => {
    try {
        const students = await findAllStudents()
        const toStudentDTO = (student) => ({
            id: student._id,
            email: student.email,
            major: student.major,
            gpa: student.gpa,
        })
        const studentsDTO = students.map(toStudentDTO)
        res.status(200).json(studentsDTO)
    } catch {
        res.status(404).json({message: error.message})
    }
}

export const getStudentById = async (req, res) => {
    const id = parseInt(req.params.id)
    try {
        const student = await findStudentById(id)
        console.log(student)
        res.status(200).json(student)
    } catch (error) {
        res.status(404).json({message: "Student not found"})
        return
    }
}

export const createStudent = async (req, res) => {
    try {
        const { name, email, password, gpa, major } = req.body
        const newStudent = { name, email, password, gpa, major}
        const loggedUser = await createStudentService(newStudent);
        const token = jwt.sign({ id: loggedUser._id, forReals: true}, process.env.JWT_SECRET, {
            expiresIn: "24h",
        })
        const toStudentDTO = (student) => ({
            id: student._id,
            email: student.email,
        })
        res.status(201).json({ token, user: toStudentDTO(loggedUser) })
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

export const updateStudent = async (req, res) => {
    const id = req.params.id
    try {
        const updated = await updateStudentService(id, req.body)
        res.status(200).json(updated)
    } catch (error) {
        if (error.message === "User not found") {
            res.status(404).json({ message: "Student not found" })
        } else {
            res.status(500).json({ message: "Internal server error" })
        }
    }
}

export const deleteStudent = async (req, res) => {
    const id = req.params.id
    try {
        await deleteStudentService(id)
        res.status(200).json({ message: "Student deleted successfully"}) // ...so we can send it here
    } catch (error) {
        if (error.message === "User not found") {
            res.status(404).json({ message: "Student not found" })
        } else {
            res.status(500).json({ message: "Internal server error" })
        }
    }
}

export const loginStudent = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await loginStudentService(email, password);
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "24h",
    });
    res.status(200).json({ token, user: { id: user._id, email: user.email } });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
}