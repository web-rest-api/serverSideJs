import {
    findAllStudents,
    findStudentById,
    createStudentService,
    updateStudentService,
    deleteStudentService,
} from "../services/studentsService.js";

const toStudentDTO = (student) => ({
    id: student._id,
    email: student.email,
});

export const getAllStudents = async (req, res) => {
    try {
        const students = await findAllStudents();
        res.status(200).json(students.map(toStudentDTO));
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const findStudentById = async (req, res) => {
    try {
        const student = await findStudentById(req.params.id);
        if (!student) return res.status(404).json({ message: "Student not found" });
        res.status(200).json(toStudentDTO(student));
    } catch {
        res.status(400).json({ message: "Invalid student ID" });
    }
};

export const createStudent = async (req, res) => {
    try {
        const newStudent = await createStudent(req.body);
        res.status(201).json(toStudentDTO(newStudent));
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

export const updateStudent = async (req, res) => {
    try {
        const updated = await updateStudent(req.params.id, req.body);
        if (!updated) return res.status(404).json({ message: "Student not found" });
        res.status(200).json(toStudentDTO(updated));
    } catch {
        res.status(400).json({ message: "Invalid student ID" });
    }
};

export const deleteStudent = async (req, res) => {
    try {
        const deleted = await deleteStudent(req.params.id);
        if (!deleted) return res.status(404).json({ message: "Student not found" });
        res.status(200).json({ message: "Student deleted" });
    } catch {
        res.status(400).json({ message: "Invalid student ID" });
    }
};