const express = require('express')

const db = require('../db/models').sequelize.models;

const ruta = express.Router()

ruta.get('/', async(req,res) => {

    let libro = await db.Libro.findAll();

    if ( libro ) {
        res.status(200).json(libro)
    } else {
        res.status(200).send("error")
    }

})

ruta.post('/', async(req,res) => {

    let data = req.body
    const libro = await db.Libro.create(data);

    if ( libro ) {
        res.status(200).json(libro)
    } else {
        res.status(200).send("error")
    }
})

ruta.put('/:id', async(req,res) => {

    const id = req.params.id;
    let { titulo,
    autor,
    editorial,
    categoria,
    anio,
    idioma } = req.body

    const libro = await db.Libro.update(
        {
            titulo: titulo,
            autor: autor,
            editorial: editorial,
            categoria: categoria,
            anio: anio,
            idioma: idioma
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

    const libro = await db.Libro.destroy({
        where: {
            id: id
        }
    });

    if ( libro ) {
        res.status(200).send("Se eliminó el usuario")
    } else {
        res.status(200).send("error")
    }
})

ruta.get('/:id', async(req,res) => {

    const id = req.params.id;
    
    const libro = await db.Libro.findByPk(id)

    if ( libro ) {
        res.status(200).json(libro)
    } else {
        res.status(200).send("error")
    }
})

module.exports = ruta