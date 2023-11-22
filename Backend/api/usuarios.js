const express = require('express')

const db = require('../db/models').sequelize.models;

const ruta = express.Router()

ruta.get('/', async(req,res) => {

    let usuario = await db.Usuario.findAll();

    if ( usuario ) {
        res.status(200).json(usuario)
    } else {
        res.status(200).send("error")
    }

})

ruta.post('/', async(req,res) => {

    let data = req.body
    const usuario = await db.Usuario.create(data);

    if ( usuario ) {
        res.status(200).json(usuario)
    } else {
        res.status(200).send("error")
    }
})

ruta.put('/:id', async(req,res) => {

    const id = req.params.id;
    let { nombre,
    apellido,
    tipoDocumento,
    dni,
    rol,
    email,
    password } = req.body

    const usuario = await db.Usuario.update(
        {
            nombre: nombre,
            apellido: apellido,
            tipoDocumento: tipoDocumento,
            dni: dni,
            rol: rol,
            email: email,
            password: password
        },
        {
            where: {
                id: id 
            }
        }
    )
})

ruta.delete('/:id', async(req,res) => {

    const id = req.params.id;

    const usuario = await db.Usuario.destroy({
        where: {
            id: id
        }
    });

    if ( usuario ) {
        res.status(200).send("Se eliminó el usuario")
    } else {
        res.status(200).send("error")
    }
})

ruta.get('/:id', async(req,res) => {

    const id = req.params.id;
    
    const usuario = await db.Usuario.findByPk(id)

    if ( usuario ) {
        res.status(200).json(usuario)
    } else {
        res.status(200).send("error")
    }
})

module.exports = ruta