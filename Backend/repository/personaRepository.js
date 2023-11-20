const Horario = require("../models/horario.js")
const Cita = require("../models/cita.js")
const PersonaCurso = require("../models/personaCurso.js")
const Rol = require("../models/rol.js")
const Carrera = require("../models/carrera.js")
const Persona = require("../models/persona.js")
const Universidad = require("../models/universidad.js")


const findAll = async () => {
    try {
        const result = await Persona.findAll({include: [Cita, Rol, Carrera, PersonaCurso, Horario]});
        console.log(result)
        return result;

    } catch(err) {
        console.error(err)

        return null;
    }
}

const create = async (persona) => {
    try {

        const newpersona = await Persona.create(persona);

        return newpersona;

    } catch(err) {
        console.error(err)

        return null;
    }
}

const findOne = async (idPersona) => {
    try {
        return await Persona.findOne({
            where: {
                idPersona
            }
        })
    }
    catch(err) {
        console.error(err)
        return null;
    }
}

const update = async (persona) => {
    try {
        const foundPersona =  await Persona.findOne({
            where: {
                idPersona: persona.idPersona
            }
        })

        foundPersona.set(persona)

        foundPersona.save()

        return foundPersona;

    }
    catch(err) {
        console.error(err)
        return null;
    }
}

const remove = async (idPersona) => {
    try {
        await Persona.destroy({
            where: {
                idPersona
            }
        })

        return true;
    }
    catch(err) {
        console.error(err)
        return null;
    }        

}


const PersonasRepository = { findAll, create, findOne,update, remove };

module.exports = PersonasRepository; 
