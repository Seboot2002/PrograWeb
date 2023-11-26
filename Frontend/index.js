import app from './app.js'
import sequelize from './src/config/database.js'

async function main() {
    try {
        const init =  process.argv[2];
        console.log({init})
        if (init)
            await sequelize.sync({force: true})     //sequelize.sync para sincroniza con la base de datos. Luego crea las tablas
                                                    //el force:true eliminara todas las tablas existentes y las creara de 0
        
        
        else                        
            await sequelize.sync({force: false})    //solo sincroniza con la base de datos

        console.log('connection successful')
        
        const port = process.env.PORT || 3001        // ????????
        
        app.listen(port)

        console.log('app iniciada en puerto ' + port)
    }
    catch(err) {
        console.error('Connection error: ', err)
    }
}

main()