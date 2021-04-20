const express = require('express')
const cors = require('cors');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usersPath = '/api/users';

        //middelwares
        this.middelwares();

        this.routes(); //llamamos al metodo cada vez que se ejecute Server
    }
    middelwares() {
        this.app.use(cors());
        //directorio publico
        this.app.use(express.static('public'));
    }
    routes() {
        this.app.use(this.usersPath, require('../routes/userroute'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Escuchando puerto ', this.port);
        });
    }

}

module.exports = Server;