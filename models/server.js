const express = require('express');
const cors = require('cors');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.port;
        this.usersPath = '/api/users';

        //Middlewares: una funcion que se ejecuta siempre que se levanta el servidor
        this.middlewares();
        //rutas de mi app
        this.routes();
    }

    middlewares() {
        //CORS https://www.npmjs.com/package/cors
        this.app.use(cors());

        //lectura del body
        this.app.use(express.json()); //serializamos a un formato json

        //directorio publico
        //el use es la palabra clave para saber que son middlewares 
        this.app.use(express.static('public'))
    }

    routes() {
        this.app.use(this.usersPath, require('../routes/user-routes'))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Escuchando puerto', this.port);
        });
    }

}

module.exports = Server;