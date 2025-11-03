import express, { Request, Response, NextFunction } from 'express'
import path from 'path'
import dotenv from 'dotenv'
dotenv.config()
import pageRouter from './routes/page.routes'
import todoRouter from './routes/todo.routes'

// Create server
const app = express()

// Set view engine to EJS
app.set('view engine', 'EJS')
app.set('views', path.join(__dirname, '../src/views')) // Tell Express where to look for the EJS pages

// Middleware
app.use(express.json()) // Allow and parse JSON body
app.use(express.static(path.join(__dirname, 'public'))) // Set the public directory
app.use(express.urlencoded({ extended: true })) // Allow form submission

// Routes
app.use('/todos', todoRouter)
app.use('/', pageRouter)

// Fallback / 404
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).send("Invalid route!")
})

// Start server
const PORT = process.env.PORT
if (!PORT) {
  throw new Error("Missing port!")
}
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})