
const { DataTypes } = require("sequelize")
const sequelize = require('../config/database.js')
const Persona = require("./persona.js")
const Curso = require("./curso.js")

const PersonaCurso = sequelize.define('personacursos', {
    idPersonaCurso: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    idPersona: {
        type: DataTypes.INTEGER
    },
    idCurso: {
        type: DataTypes.INTEGER
    }
})

PersonaCurso.belongsTo(Persona, {
    foreignKey: 'idPersona',
    targetId: 'idPersona'
})

PersonaCurso.belongsTo(Curso, {
    foreignKey: 'idCurso',
    targetId: 'idCurso'
})

Persona.hasMany(PersonaCurso, {
    foreignKey: 'idPersona',
    targetId: 'idPersona'
})

Curso.hasMany(PersonaCurso, {
    foreignKey: 'idCurso',
    targetId: 'idCurso'
})


module.exports = PersonaCurso;