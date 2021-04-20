const { request, response } = require('express');

const usersGet = (req = request, res = response) => {
    const query = req.query;

    //desestructurando argumentos
    const { nombre = 'sin nombre', apellido } = req.query;
    res.json({
        mensaje: 'Get api - controller',
        nombre,
        apellido
    });
}

const usersPost = (req, res = response) => {
    //extraemos el body json

    const { nombre, apellidos, edad } = req.body;

    res.json({
        mensaje: 'Post api - controller',
        nombre,
        apellidos,
        edad
    });
}

const usersPut = (req, res = response) => {
    const { id } = req.params; //desestructuramos
    res.json({
        mensaje: 'Put api - controller',
        id
    });
}

const usersPatch = (req, res = response) => {
    res.json({
        mensaje: 'Patch api - controller'
    });
}

const usersDelete = (req, res = response) => {
    res.json({
        mensaje: 'Delete api - controller'
    });
}

module.exports = {
    usersGet,
    usersPost,
    usersPut,
    usersPatch,
    usersDelete
}