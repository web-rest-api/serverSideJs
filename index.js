import express from "express"
import cors from "cors"
import logMiddleware from "./middleware/log.js";
import studentRoutes from "./routes/studentRoutes.js"

const app = express()
const port = 3000

// Global middleware
app.use(cors())
app.use(express.json())  // Translates response via JSON
app.use(logMiddleware)

// home route
app.get("/", (req, res) => {
	res.json({
		message: "Welcome to the API",
		version: "1.0.0",
		endpoints: {
			students: "/students"
		}
	})
})

// Health check (useful for Render)
app.get('/health', (req, res) => {
	res.json({ 
		status: 'OK',
		timestamp: new Date().toISOString(),
	})
})

// Mount the model router at its route, making it base endpoint
app.use('/students', studentRoutes)

// 404 handler
app.use((req, res) => {
	res.status(404).json({ 
		error: 'Not Found',
		message: `Route ${req.method} ${req.path} not found` 
	})
})

// Error handler
app.use((err, req, res, next) => {
	console.error('Error:', err)
	res.status(err.status || 500).json({
		error: err.message || 'Internal Server Error'
	})
})

// Start server
app.listen(port, () => {
	console.log(`✅ Server running on http://localhost:${port}`)
	console.log(`📊 Environment: Development (NOT PRODUCTION)`)
	console.log(`\nAPI Endpoints:`)
	console.log(`  GET    /              - Welcome message (public)`)
	console.log(`  GET    /health        - Health check (public)`)
	console.log(`  GET    /students         - Get all students`)
	console.log(`  GET    /students/:id     - Get by model ID`)
	console.log(`  POST   /students         - Create new model`)
	console.log(`  PUT    /students/:id     - Update model`)
	console.log(`  DELETE /students/:id     - Delete model`)
})
