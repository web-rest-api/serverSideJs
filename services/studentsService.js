import { students } from "../students.js";

export const findAllUsers = () => {
    if (!students || students.length === 0) {
        throw new Error("No users found")
    } else {
        return students
    }
}

/**
 * @param {*} id :string
 * @returns
 */

export const findUser = (id) => {
    const foundStudent = students.find((student) => student.id === id)
    if (foundStudent) {
        return foundStudent
    } else {
        throw new Error("User not found")
    }
}

// add middleware checks !!!!! 🚨‼️
export const createStudentService = (newStudent) => {
    students.push(newStudent)
}

export const updateStudentService = (id, updatedData) => {
    const index = students.findIndex((student) => student.id === id)
    if (index === -1) {
        throw new Error("User not found")
    }
    for (let key in updatedData) {
        students[index][key] = updatedData[key]
    }
    return students[index]
}

export const deleteStudentService = (id) => {
    const index = students.findIndex((student) => student.id === id)
    if (index === -1) {
        throw new Error("User not found")
    }
    students.splice(index, 1)
}