import express from "express";
import personasRoutes from "./routes/index.routes.js"

const app = express()

app.use(express.json())
app.use(personasRoutes)

export default app