import Student from "../models/Student.js";

export const findAllStudents = () => Student.find();

export const findStudentById = (id) => Student.findById(id);

export const createStudent = (data) => Student.create(data);

export const updateStudent = (id, data) =>
    Student.findByIdAndUpdate(id, data, { new: true });

export const deleteStudent = (id) => Student.findByIdAndDelete(id);
