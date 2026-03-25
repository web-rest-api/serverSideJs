// emulates db connection !!
// import { students } from "../students.js";

const students = [];

export const findAllUsers = () => {
  if (!students || students.length === 0) {
    throw new Error("No users found");
  } else {
    return students;
  }
};

/**
 *
 * @param {*} id : string
 * @returns student
 */

export const findUser = (id) => {
  const foundStudent = students.find((student) => student.id === id);

  if (foundStudent) {
    return foundStudent;
  } else {
    throw new Error("User not found");
  }
};

// add middleware checks !!!!! 🚨‼️
export const createStudentService = (newStudent) => {
  students.push(newStudent);
};
