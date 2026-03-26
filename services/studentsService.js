import { v4 as uuidv4 } from "uuid";
import studentsData from "../students.js";

const students = [...studentsData];

export const findAllStudents = () => students;

export const findStudentById = (id) =>
    students.find((s) => String(s.id) === String(id));

export const createStudent = (data) => {
    const newStudent = { id: uuidv4(), ...data }; // use uuid to generate unique id for new student
    students.push(newStudent);
    return newStudent;
};

export const updateStudent = (id, data) => {
    const index = students.findIndex((s) => String(s.id) === String(id));
    if (index === -1) return null;
    students[index] = { ...students[index], ...data }; // use spread operator to update existing student data with new data
    return students[index];
};

export const deleteStudent = (id) => {
    const index = students.findIndex((s) => String(s.id) === String(id));
    if (index === -1) return null;
    const deleted = students.splice(index, 1); // use splice to remove the student from the array
    return deleted[0];
};
