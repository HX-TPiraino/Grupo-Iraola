import express from "express";
import personasRoutes from "./routes/index.routes.js"

const app = express()

app.use(express.json())

app.use((req,res,next) => {
    res.header("Access-Control-Allow-Origin","*")
})

app.use(personasRoutes)

export default app