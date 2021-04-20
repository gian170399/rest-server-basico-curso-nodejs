require('dotenv').config(); //importamos los datos del archivo .env
const Server = require('./models/servercito');


const server = new Server;

server.listen();