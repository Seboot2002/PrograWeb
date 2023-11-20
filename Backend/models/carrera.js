
const { DataTypes } = require("sequelize")
const sequelize = require('../config/database.js')
const Universidad = require("./universidad.js")

const Carrera = sequelize.define('carreras', {
    idCarrera: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING
    },
    idUniversidad: {
        type: DataTypes.INTEGER
    }
})

Carrera.belongsTo(Universidad, {
    foreignKey: 'idUniversidad',
    targetId: 'idUniversidad'
})

Universidad.hasMany(Carrera, {
    foreignKey: 'idUniversidad',
    targetId: 'idUniversidad'
})


module.exports = Carrera;