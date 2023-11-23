const express = require('express');
const { where } = require('sequelize');

const db = require('../db/models').sequelize.models;

const ruta = express.Router()

ruta.post('/login', async(req,res) => {

    let data = req.body;

    if(data.nombre != undefined){
        let usuario = await db.Usuario.findAll({
            where: {
                nombre: data.nombre,
                password: data.password
            }
        });
    
        if ( usuario ) {
            res.status(200).send(usuario)
        } else {
            res.status(200).send("error")
        }
    }
    
    if(data.nombre == undefined)
    {
        let usuario = await db.Usuario.findAll();
    
        if ( usuario ) {
            res.status(200).json(usuario)
        } else {
            res.status(200).send("error")
        }

    }

});

ruta.get('/', async(req,res) => {

    let data = req.body;

    let usuario = await db.Usuario.findAll();

    if ( usuario ) {
        res.status(200).send(usuario)
    } else {
        res.status(200).send("error")
    }
});

ruta.post('/', async(req,res) => {

    let data = req.body
    const usuario = await db.Usuario.create(data);

    if ( usuario ) {
        res.status(200).send(usuario)
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

    if ( usuario ) {
        await db.Usuario.findAll({
            where: {
                id: usuario 
            }
        }).then((result)=>{
            
            res.status(200).send(result)
        });
    } else {
        res.status(200).send("error")
    }
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