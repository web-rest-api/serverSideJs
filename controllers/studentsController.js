const studentsService = require("../services/studentsService")

exports.getAllStudents = (req, res) => {
  const data = studentsService.getAll()
  res.json(data)
}

exports.getStudentById = (req, res) => {
  const id = req.params.id
  const student = studentsService.getById(id)
  res.json(student)
}

exports.createStudent = (req, res) => {
  const newStudent = req.body
  const created = studentsService.create(newStudent)
  res.status(201).json(created)
}

exports.updateStudent = (req, res) => {
  const id = req.params.id
  const updated = studentsService.update(id, req.body)
  res.json(updated)
}

exports.deleteStudent = (req, res) => {
  const id = req.params.id
  const deleted = studentsService.remove(id)
  res.json(deleted)
}
