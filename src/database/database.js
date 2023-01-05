import Sequelize from "sequelize";
import dotenv from "dotenv";
dotenv.config()


export const sequelize = process.env.ENTORNO === "Desarrollo" ?
    new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASSWORD,
        {
            host: process.env.HOST || "localhost",
            dialect: process.env.DIALECT
        }
    )
    :
    new Sequelize(process.env.DB_DEPLOY,
        {
            logging: false,
            native: false
        })


