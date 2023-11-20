const { Sequelize } = require('sequelize');
const dotenv = require('dotenv')

dotenv.config()

const hostname = process.env.HOSTNAME || '127.0.0.1'
const username = process.env.BDUSER || 'postgres'
const password = process.env.PASSWORD || 'mechita2002'
const database = process.env.DATABASE || 'biblioteca'
const port = process.env.DBPORT || 5432
const dialect = process.env.DIALECT || 'postgres'

const sequelize = new Sequelize(database, username, password, {
    host: hostname,
    port,
    dialect: dialect,
    operatorAliases: false,
    ssl: {rejectUnauthorized: false},
    pool: {
        max: 10,
        min: 0,
        acquire: 20000,
        idle: 5000
    }
})


module.exports = sequelize