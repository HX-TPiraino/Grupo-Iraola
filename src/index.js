import app from "./app.js"
import {sequelize} from "./database/database.js"
import dotenv from "dotenv";
dotenv.config()

const port = process.env.PORT || 4000

async function main () {
    try {
        await sequelize.sync({force: false})
        app.listen(80)
        console.log("Connection has been establish successfully")
        console.log("Server on port ", 80)
    } catch (error) {
        console.error("Unable to connect to the database: ", error)
    }
}

main();