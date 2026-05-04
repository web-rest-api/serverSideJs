import Student from "../models/Student.js";

export const findAllStudents = () => Student.find();

export const findStudentById = (id) => Student.findById(id);

export const createStudentService = (data) => Student.create(data);

export const updateStudentService = (id, data) =>
    Student.findByIdAndUpdate(id, data, { new: true });

export const deleteStudentService = (id) => Student.findByIdAndDelete(id);
