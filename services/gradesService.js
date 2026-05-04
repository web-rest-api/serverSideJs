import Grade from "../models/Grade.js";

export const findAllGrades = () => Grade.find();

export const findGradeById = (id) => Grade.findById(id);

// TODO: return all grades that belong to a specific student
export const findGradesByStudent = (studentId) => {
    // hint: filter by studentId field
};

export const createGrade = (data) => Grade.create(data);

export const updateGrade = (id, data) =>
    Grade.findByIdAndUpdate(id, data, { new: true });

export const deleteGrade = (id) => Grade.findByIdAndDelete(id);
