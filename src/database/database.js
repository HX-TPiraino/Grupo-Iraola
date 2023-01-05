import Sequelize from "sequelize";
import dotenv from "dotenv";
dotenv.config()


export const sequelize = new Sequelize(process.env.DB_DEPLOY || `${process.env.DIALECT}://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.HOST}/${process.env.DB_NAME}`,
{
    logging: false,
    native: false
})