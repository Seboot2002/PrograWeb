const { DataTypes } = require("sequelize")
const sequelize = require('../config/database.js')

const Rol = sequelize.define('roles', {
    idRol: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING
    }
})

module.exports = Rol;