import { loadData, saveData } from "../repositories/studentsRepository.js"

// Get all students
export async function getAllStudents(){
    return await loadData()
}

// Get student by <id>
export async function findStudentById(id){
    const students = await loadData()
    return students.find(student => student.id === parseInt(id))
}

// Create student
export async function createStudent(studentData){
    const students = await loadData();

    // Generate ID
    const id = students.length > 0 ? Math.max(...students.map(s => s.id)) + 1 : 1
    const newStudent = { id: id, ...studentData }

    // Update JSON
    students.push(newStudent)
    await saveData(students)
    return newStudent
}

// Update student
export async function updateStudent(id, updatedData){
    const students = await loadData();

    const index = students.findIndex(s => s.id == parseInt(id))
    if (index === -1) return null;

    // Update JSON
    students[index] = { ...students[index], ...updatedData, id: parseInt(id) }  // updatedData would replace the old parts of ...students[index]; we re-put hard-coded id to prevent malicious user input (id: 99) which replaces id
    await saveData(students)
    return students[index]
}

// Delete student
export async function deleteStudent(id){
    const students = await loadData();

    // Filter out student
    const filtered = students.filter(s => s.id !== parseInt(id))
    if (students.length === filtered.length) return false

    await saveData(filtered)
    return true
}


// TODO 1: Import the User model from ../models/userModel.js

// TODO 2: Import bcrypt from "bcrypt"

// TODO 3: Export the following functions using the correct Mongoose methods:
//   - findAllStudents()          → returns all users        (hint: .find({}))
//   - findStudentById(id)        → returns one user by id   (hint: .findById())
//   - deleteStudentService(id)   → deletes a user by id     (hint: .findByIdAndDelete())

// TODO 4: Export createStudentService(newStudent)
//   Passwords must NEVER be stored as plain text in a database.
//   Before calling User.create(), hash the password with bcrypt:
//
//   const SALT_ROUNDS = 10;  // controls how expensive the hash is
//
//   const hashedPassword = await bcrypt.hash(newStudent.password, SALT_ROUNDS);
//   return User.create({ ...newStudent, password: hashedPassword });
//
//   This function must be async because bcrypt.hash() returns a Promise.

// TODO 5: Export updateStudentService(id, newStudent)
//   A user might update their profile without changing their password.
//   Only hash if a password field is present in the update payload:
//
//   if (newStudent.password) {
//     newStudent.password = await bcrypt.hash(newStudent.password, SALT_ROUNDS);
//   }
//   return User.findByIdAndUpdate(id, newStudent);
//
//   This function must also be async.