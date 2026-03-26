import { findAllStudents } from "../services/studentsService.js";

export const getAllStudents = (req, res) => {
    const students = findAllStudents();
    res.status(200).json(students);
};

