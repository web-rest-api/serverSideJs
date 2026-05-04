import express from "express"
import cors from "cors"
import connectToMongoDB from "./config/db.js";

import logMiddleware from "./middleware/log-middleware.js";

import studentRouter from "./routes/studentRoute.js"
import courseRouter from "./routes/courseRoute.js"
import roomRouter from "./routes/roomRoute.js"

const app = express()
const port = process.env.PORT || 3000

// trigger mongodb atlas cluster connection
await connectToMongoDB();

// global middleware
app.use(cors())  // allow other sites/servers to access this server's resources
app.use(express.urlencoded({ extended: true }))
app.use(express.json())  // translate response via JSON
app.use(logMiddleware)

// read root
app.get("/", (req, res) => {
	res.json({
		message: "Simple EPITA REST API running...",
		version: "1.5.0",
		endpoints: {
			students: "/api/students",
			courses: "/api/courses",
			rooms: "/api/rooms"
		}
	})
})

// health check
app.get('/health', (req, res) => {
	res.json({ 
		status: 'OK',
		timestamp: new Date().toISOString(),
	})
})

// mount model routers at respective routes
app.use('/api/students', studentRouter)
app.use('/api/courses', courseRouter)
app.use('/api/rooms', roomRouter)

// 404 handler
app.use((req, res) => {
	res.status(404).json({ 
		error: 'Not Found',
		message: `Route ${req.method} ${req.path} not found` 
	})
})

// global error handler
app.use((err, req, res, next) => {
	console.error('Error:', err)
	res.status(err.status || 500).json({
		error: err.message || 'Internal Server Error'
	})
})

// log running server details
app.listen(port, () => {
	console.log(`<!> Server running on http://localhost:${port}`)
	console.log(` -> Environment: Development (NOT PRODUCTION)`)
	console.log(`==========================================================`)
	console.log(`\nAPI Endpoints:`)
	console.log(`\n====================  STUDENTS Model  ====================`)
	console.log(`  GET    /                     - Welcome message (public)`)
	console.log(`  GET    /health               - Health check (public)`)
	console.log(`  GET    /api/students         - Get all students`)
	console.log(`  GET    /api/students/:id     - Get by model ID`)
	console.log(`  POST   /api/students         - Create new model`)
	console.log(`  PUT    /api/students/:id     - Update model`)
	console.log(`  DELETE /api/students/:id     - Delete model`)
	console.log(`\n====================  COURSE Model  ====================`)
	console.log(`  GET    /                     - Welcome message (public)`)
	console.log(`  GET    /health               - Health check (public)`)
	console.log(`  GET    /api/courses         - Get all courses`)
	console.log(`  GET    /api/courses/:id     - Get by model ID`)
	console.log(`  POST   /api/courses         - Create new model`)
	console.log(`  PUT    /api/courses/:id     - Update model`)
	console.log(`  DELETE /api/courses/:id     - Delete model`)
	console.log(`\n====================  ROOM Model  ====================`)
	console.log(`  GET    /                     - Welcome message (public)`)
	console.log(`  GET    /health               - Health check (public)`)
	console.log(`  GET    /api/rooms         - Get all rooms`)
	console.log(`  GET    /api/rooms/:id     - Get by model ID`)
	console.log(`  POST   /api/rooms         - Create new model`)
	console.log(`  PUT    /api/rooms/:id     - Update model`)
	console.log(`  DELETE /api/rooms/:id     - Delete model`)
})
