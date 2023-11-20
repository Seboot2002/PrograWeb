const express = require('express');        //simplifica el manejo de solicitudes y respuestas HTTP
const bodyParser = require('body-parser'); //analiza las solicitudes en formato JSON
const cors = require('cors')
const morgan = require('morgan');

const RolesRoutes = require('./routes/roles.js')
const UniversidadesRoutes = require('./routes/universidades.js')
const CarrerasRoutes = require('./routes/carreras.js')
const CursosRoutes = require('./routes/cursos.js')
const PersonasRoutes = require('./routes/personas.js')
const PersonasCursosRoutes = require('./routes/personascursos.js')
const HorariosRoutes = require('./routes/horario.js')
const CitasRoutes = require('./routes/citas.js')

let app = express();
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    return res.json({ result: 'OK'});
})

app.use("/roles", RolesRoutes);
app.use("/universidades", UniversidadesRoutes);
app.use("/carreras", CarrerasRoutes);
app.use("/cursos", CursosRoutes);
app.use("/personas", PersonasRoutes);
app.use("/personascursos", PersonasCursosRoutes);
app.use("/horarios", HorariosRoutes);
app.use("/citas", CitasRoutes);

module.exports = app;