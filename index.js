const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

let students = JSON.parse(fs.readFileSync("students.json", "utf-8"));

app.get("/students", (req, res) => {
  res.status(200).json(students);
});

app.get("/students/:id", (req, res) => {
  const student = students.find((s) => s.id === parseInt(req.params.id));

  if (!student) {
    return res.status(404).json({ error: "Student not found" });
  }

  res.status(200).json(student);
});

app.post("/students", (req, res) => {
  const { name, email, major, gpa } = req.body;

  if (!name || !email || !major || gpa === undefined) {
    return res.status(400).json({ error: "All fields are required: name, email, major, gpa" });
  }

  const newStudent = {
    id: students.length + 1,
    name,
    email,
    major,
    gpa,
  };

  students.push(newStudent);
  res.status(201).json(newStudent);
});

app.put("/students/:id", (req, res) => {
  const index = students.findIndex((s) => s.id === parseInt(req.params.id));

  if (index === -1) {
    return res.status(404).json({ error: "Student not found" });
  }

  const { name, email, major, gpa } = req.body;

  if (!name || !email || !major || gpa === undefined) {
    return res.status(400).json({ error: "All fields are required: name, email, major, gpa" });
  }

  students[index] = { id: students[index].id, name, email, major, gpa };
  res.status(200).json(students[index]);
});

app.delete("/students/:id", (req, res) => {
  const index = students.findIndex((s) => s.id === parseInt(req.params.id));

  if (index === -1) {
    return res.status(404).json({ error: "Student not found" });
  }

  const deleted = students.splice(index, 1);
  res.status(200).json(deleted[0]);
});

app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
