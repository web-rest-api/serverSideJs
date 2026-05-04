import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import studentRouter from "./routes/students.js";
import authRouter from "./routes/auth.js";
import gradeRouter from "./routes/grades.js";
import courseRouter from "./routes/courses.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.json({ msg: "Hello World!" });
});

app.use("/auth", authRouter);
app.use("/students", studentRouter);
app.use("/grades", gradeRouter);
app.use("/courses", courseRouter);

await connectDB();

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
