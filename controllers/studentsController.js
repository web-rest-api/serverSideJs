import { findAllUsers, findUser} from "../services/studentService.js"

export const getAllStudents = (req, res) => {
    try {
        const students = getAllStudents()
        res.status(200).json(students)
    } catch {
        res.status(500).json({message: "Internal server error"})
    }
}

export const getStudentById = (req, res) => {
    const id = parseInt(req.params.id)
    try {
        const student = findUser(id)
        console.log(student)
        res.status(200).json(student)
    } catch (error) {
        res.status(404).json({message: "Student not found"})
        return
    }
}

export const createStudent = (req, res) => {
    try {
        const { name, email, major, gpa } = req.body
        const newStudent = { id: Date.now(), name, email, major, gpa }
        console.og(newStudent)
        createStudentService(newStudent)
        res.status(201).json({ message: "Student created successfully" })
    } catch (error) {
        res.status(500).json({ message: error })
    }
}