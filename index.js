import express from "express"
import cors from "cors";

import { connectToMongoDB } from "./config/db.js";
import studentRouter from "./routes/studentsRoute.js";
import courseRouter from "./routes/CourseRoute.js";
import { logger } from "./middleware/middleware.js";

// const express = require("express") // old js

const app = express()
const port = 3000

// DB connection
connectToMongoDB();

// middleware
app.use(express.json()); // parse JSON request body
app.use(express.urlencoded({ extended: true })); // parse URL-encoded request body
app.use(cors()); // enable CORS for all routes
app.use(express.static("public")); // serve static files

// routes
app.use(logger);
app.use("/api/students", studentRouter);
app.use("/api/courses", courseRouter)

app.get("/", (req, res) => {
  res.send("Server is running ...");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});