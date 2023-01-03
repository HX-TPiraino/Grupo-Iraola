import Sequelize from "sequelize";
import dotenv from "dotenv";
dotenv.config()

export const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DIALECT,
    process.env.DB_PASSWORD,
    {
    host: process.env.HOST,
    dialect: process.env.DIALECT
    }
)