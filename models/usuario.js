const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({
    Name: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
    },

    Email: {
        type: String,
        required: [true, 'El correo es obligatorio'],
        unique: true,
    },

    Password: {
        type: String,
        required: [true, 'La contrasena es obligatorio'],
    },
    Img: {
        type: String,
    },
    Role: {
        type: String,
        //required: true,
        enum: ['ADMIN_ROLE', 'USER_ROLE']
    },
    State: {
        type: Boolean,
        default: true,
    },
    Google: {
        type: Boolean,
        default: false,
    },

});


module.exports = model('Usuario', UsuarioSchema);