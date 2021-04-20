//desestructurar el paquete de express llamado Router
const { Router } = require('express');
//Provider controller
const { usersGet, usersPost, usersPut, usersDelete } = require('../controllers/users-controller');

const router = Router();

router.get('/', usersGet);

router.post('/', usersPost);

router.put('/:id', usersPut);

router.delete('/', usersDelete);

module.exports = router;