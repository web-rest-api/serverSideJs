import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import studentRouter from "./routes/students.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ msg: "Hello World!" });
});

app.use("/students", studentRouter);

await connectDB();

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
