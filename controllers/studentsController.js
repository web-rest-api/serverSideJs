import { findAllUsers, findUser, createStudentService, updateStudentService, deleteStudentService} from "../services/studentsService.js"

export const getAllStudents = (req, res) => {
    try {
        const students = findAllUsers()
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
        console.log(newStudent)
        createStudentService(newStudent)
        res.status(201).json({ message: "Student created successfully" })
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

export const updateStudent = (req, res) => {
    const id = parseInt(req.params.id)
    try {
        const updatedStudent = updateStudentService(id, req.body) // returns the student...
        res.status(200).json({ message: "Student updated successfully", student: updatedStudent }) // ...so we can send it here
    } catch (error) {
        if (error.message === "User not found") {
            res.status(404).json({ message: "Student not found" })
        } else {
            res.status(500).json({ message: "Internal server error" })
        }
    }
}

export const deleteStudent = (req, res) => {
    const id = parseInt(req.params.id) 
    try {
        const deletedStudent = deleteStudentService(id) // same here, we return the deleted student...
        res.status(200).json({ message: "Student deleted successfully", student: deletedStudent }) // ...so we can send it here
    } catch (error) {
        if (error.message === "User not found") {
            res.status(404).json({ message: "Student not found" })
        } else {
            res.status(500).json({ message: "Internal server error" })
        }
    }
}