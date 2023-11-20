const { DataTypes } = require("sequelize")
const sequelize = require('../config/database.js')

const Universidad = sequelize.define('universidades', {
    idUniversidad: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING
    }
})

module.exports = Universidad;