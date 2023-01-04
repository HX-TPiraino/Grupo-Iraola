import express from "express";
import personasRoutes from "./routes/index.routes.js"
import bodyParser from "body-parser";

const app = express()

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())
app.use(personasRoutes)

export default app