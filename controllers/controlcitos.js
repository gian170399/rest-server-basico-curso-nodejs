//desestructuracion del paquete de express
const { response } = require('express');

const usersGet = (req, res = response) => {
    res.json({
        mensaje: 'get API - controller'
    });
}

const usersPost = (req, res = response) => {
    res.json({
        mensaje: 'post API - controller'
    });
}

const usersPut = (req, res = response) => {
    res.json({
        mensaje: 'put API - controller'
    });
}

const usersDelete = (req, res = response) => {
    res.json({
        mensaje: 'delete API - controller'
    });
}


module.exports = {
    usersGet,
    usersPost,
    usersPut,
    usersDelete
}