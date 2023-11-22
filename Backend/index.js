const app = require('./app.js')
const db = require("./db/models")
const dotenv = require("dotenv");

dotenv.config();

const PORT = 3080;

db.sequelize.sync({ force: true })
.then(()=>{
    app.listen(PORT, (err)=>{
        if(err){
            
            return console.error('Failed', err);
        }

        console.log('Escuchando en el puerto:', PORT);
        return app;
    })
})
.catch((err) => console.error("No se pudo conectar a la db", err));

//Hola profe, soy sebas :D