import {
    findAllStudents,
    findStudentById,
    createStudent,
    updateStudent,
    deleteStudent,
} from "../services/studentsService.js";



export const getAllStudents = (req, res) => {
    res.status(200).json(findAllStudents());
};

export const getStudentById = (req, res) => {
    const student = findStudentById(req.params.id);
    if (!student) return res.status(404).json({ msg: "Student not found" });
    res.status(200).json(student);
};

export const createStudentHandler = (req, res) => {
    const newStudent = createStudent(req.body);
    res.status(201).json(newStudent);
};

export const updateStudentHandler = (req, res) => {
    const updated = updateStudent(req.params.id, req.body);
    if (!updated) return res.status(404).json({ msg: "Student not found" });
    res.status(200).json(updated);
};

export const deleteStudentHandler = (req, res) => {
    const deleted = deleteStudent(req.params.id);
    if (!deleted) return res.status(404).json({ msg: "Student not found" });
    res.status(200).json(deleted);
};
