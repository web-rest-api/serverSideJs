import { findAllUsers, findUser } from "../services/studentsService.js";

export const getAllStudents = (req, res) => {
  try {
    const students = findAllUsers();
    res.status(200).json(students);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getStudentById = (req, res) => {
  const id = parseInt(req.params.id);
  //const student = students.find((student) => student.id === id);
  try {
    const student = findUser(id);
    console.log(student);
    res.status(200).json(student);
  } catch (error) {
    res.status(404).json({ message: "Student not found" });
    return;
  }
};

export const createStudent = (req, res) => {
  try {
    const { name, email, major, gpa } = req.body;
    const newStudent = { id: Date.now(), name, email, major, gpa };
    console.og(newStudent);
    createStudentService(newStudent);
    res.status(201).json({ message: "Student created successfully" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
