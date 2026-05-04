import {
    findAllStudents,
    findStudentById,
    createStudent,
    updateStudent,
    deleteStudent,
} from "../services/studentsService.js";

export const getAllStudents = async (req, res) => {
    try {
        const students = await findAllStudents();
        const toStudentDTO = (student) => ({
            id: student._id,
            email: student.email,
        });
        const studentsDTO = students.map(toStudentDTO)
        res.status(200).json(studentsDTO);
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
};

export const getStudentById = async (req, res) => {
    try {
        const student = await findStudentById(req.params.id);
        if (!student) return res.status(404).json({ msg: "Student not found" });
        res.status(200).json(student);
    } catch {
        res.status(400).json({ msg: "Invalid student ID" });
    }
};

export const createStudentHandler = async (req, res) => {
    try {
        const newStudent = await createStudent(req.body);
        res.status(201).json(newStudent);
    } catch (err) {
        res.status(400).json({ msg: err.message });
    }
};

export const updateStudentHandler = async (req, res) => {
    try {
        const updated = await updateStudent(req.params.id, req.body);
        if (!updated) return res.status(404).json({ msg: "Student not found" });
        res.status(200).json(updated);
    } catch {
        res.status(400).json({ msg: "Invalid student ID" });
    }
};

export const deleteStudentHandler = async (req, res) => {
    try {
        const deleted = await deleteStudent(req.params.id);
        if (!deleted) return res.status(404).json({ msg: "Student not found" });
        res.status(200).json(deleted);
    } catch {
        res.status(400).json({ msg: "Invalid student ID" });
    }
};
