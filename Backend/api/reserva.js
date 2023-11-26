const express = require('express')

const db = require('../db/models').sequelize.models;

const ruta = express.Router()

ruta.get('/:id', async(req,res) => {

    let data = req.params
    let id = data.id

    let reserva = await db.Reserva.findAll({
        where: {
            usuarioId: id
        },
        include: [
            {model: db.Libro, as: 'Libros'},
            {model: db.Usuario, as: 'Usuario'}
          ]
    });

    if ( reserva ) {
        res.status(200).json(reserva)
    } else {
        res.status(200).send("error")
    }

})

ruta.get('/', async(req,res) => {

    let data = req.params

    let reserva = await db.Reserva.findAll({
        where: {},
        include: [
            {model: db.Libro, as: 'Libros'},
            {model: db.Usuario, as: 'Usuario'}
          ]
    });

    if ( reserva ) {
        res.status(200).json(reserva)
    } else {
        res.status(200).send("error")
    }

})

ruta.post('/', async(req,res) => {

    let data = req.body
    const reserva = await db.Reserva.create(data);

    if ( reserva ) {
        res.status(200).json(reserva)
    } else {
        res.status(200).send("error")
    }
})

ruta.put('/:id', async(req,res) => {

    const id = req.params.id;
    let { fechaInicial,
        fechaFinal,
        dias } = req.body

    const reserva = await db.Reserva.update(
        {
            fechaInicial: fechaInicial,
            fechaFinal: fechaFinal,
            dias: dias
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

    const reserva = await db.Reserva.destroy({
        where: {
            id: id
        }
    });

    if ( reserva ) {
        res.status(200).send("Se eliminó el usuario")
    } else {
        res.status(200).send("error")
    }
})

ruta.get('/:id', async(req,res) => {

    const id = req.params.id;
    
    const reserva = await db.Reserva.findByPk(id)

    if ( reserva ) {
        res.status(200).json(reserva)
    } else {
        res.status(200).send("error")
    }
})

module.exports = ruta