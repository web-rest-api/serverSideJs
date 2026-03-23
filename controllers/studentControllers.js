import * as studentService from "../services/studentService.js"

// Controllers (final route handlers)

// Get all students
export async function getAllStudents(req, res) {
    try{
        const students = await studentService.getAllStudents()
        res.status(200).json(students)
    } catch(error) {
        res.status(500).json({ msg: error.message })
    }
}

// Get student by <id>
export async function findStudentById (req, res) {
    try {
        const id = req.params.id
        const student = await studentService.findStudentById(id)

        if (!student) return res.status(404).json({ msg: `Book with id ${id} is not available` })
        
        return res.status(200).json(student)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

// Create
export async function createStudent (req, res) {
    try {
        const { name, email, major, gpa } = req.body

        if (!name) return res.status(400).json({ msg: 'Student name required' })
        if (!major) return res.status(400).json({ msg: 'Major required' })

        const newStudent = await studentService.createStudent({ name, email, major, gpa })
        return res.status(200).json(newStudent)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

// Update
export async function updateStudent(req, res) {
    try {
        const id = req.params.id
        const newStudentData = req.body

        const updatedStudent = await studentService.updateStudent(id, newStudentData)

        if (!updatedStudent) return res.status(404).json({ msg: 'Student not found' })
        
        res.status(200).json(updatedStudent)
    } catch (error) {
        res.status(500).json({ msg: error.message })   
    }
}

// Delete
export async function deleteStudent (req, res) {
    try {
        const id = req.params.id
        const deleted = await studentService.deleteStudent(id)

        if (!deleted) return res.status(404).json({ msg: `Student not found` })
        
        res.status(204).send()  // No Content: Successful Deletion
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}