const { DataTypes } = require("sequelize")
const sequelize = require('../config/database.js')
const Persona = require("./persona.js")

const Horario = sequelize.define('horarios', {
    idHorario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    idPersona: {
        type: DataTypes.INTEGER
    },
    horaInicio: {
        type: DataTypes.TIME
    },
    diaSemana: {
        type: DataTypes.STRING
    },
    horaFin: {
        type: DataTypes.TIME
    }
})

Horario.belongsTo(Persona, {
    foreignKey: 'idPersona',
    targetId: 'idPersona'
})

Persona.hasMany(Horario, {
    foreignKey: 'idPersona',
    targetId: 'idPersona'
})


module.exports = Horario;