const students = require("../students.json")

exports.getAll = () => {
  return students
}

exports.getById = (id) => {
  return students.find(s => s.id == id)
}

exports.create = (student) => {
  students.push(student)
  return student
}

exports.update = (id, data) => {
  const index = students.findIndex(s => s.id == id)
  students[index] = { ...students[index], ...data }
  return students[index]
}

exports.remove = (id) => {
  const index = students.findIndex(s => s.id == id)
  const removed = students[index]
  students.splice(index, 1)
  return removed
}
