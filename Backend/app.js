const express = require('express');
const bodyParser = require("body-parser")
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');

const usuarios = require('./api/usuarios')
const reserva = require('./api/reserva')
const libro = require('./api/libro')

const app = express()
const port = 3080

/* Esta es la parte del Middleware */
app.use(express.static(path.join(__dirname, './static')));
//app.use(bodyParser.json());
app.use(express.json());
app.use(morgan('dev'))
app.use(cors())

// Dependiendo de la url mandarlo a un API; es decir, si se ejecuta esa url se ejecuta la API
app.use('/personas', usuarios)
app.use('/reserva', reserva)
app.use('/libro', libro)

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, './static/index.html'));
});

module.exports = app