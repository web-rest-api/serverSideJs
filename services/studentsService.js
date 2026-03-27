import { students } from "../students.js";

export const findAllUsers = () => {
    return students;
}

/**
 * @param {*} id :string
 * @returns
 */

export const findUser = (id) => {
    const foundStudent = students.find((student) => student.id === id)
    if (foundStudent) {
        return foundSTudent
    } else {
        throw new Error("User not found")
    }
}

export const createStudentService