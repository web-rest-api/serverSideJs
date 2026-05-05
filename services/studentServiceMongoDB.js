import bcrypt from "bcrypt";
import User from "../models/userModel.js";

const SALT_ROUNDS = 10;

export const findAllStudents = () => User.find();

export const findStudentById = (id) => User.findById(id);

export const createStudentService = async (newStudent) => {
  const hashedPassword = await bcrypt.hash(newStudent.password, SALT_ROUNDS);
  return User.create({ ...newStudent, password: hashedPassword });
};

export const loginStudentService = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error("Invalid credentials");
  const match = await bcrypt.compare(password, user.password);
  if (!match) throw new Error("Invalid credentials");
  return user;
};

export const deleteStudentService = (id) => User.findByIdAndDelete(id);

export const updateStudentService = async (id, newStudent) => {
  if (newStudent.password) {
    newStudent.password = await bcrypt.hash(newStudent.password, SALT_ROUNDS);
  }
  return User.findByIdAndUpdate(id, newStudent);
};