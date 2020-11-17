//Rutas especificas para todos los procesos con el usuario

const express = require('express');
const router = express.Router();
const controladorUsuario = require('../controllers/usuarioController');

router.get('/',controladorUsuario.getUsuario);
router.post('/main',controladorUsuario.postMain);
router.post('/registrando',controladorUsuario.postUsuario);
router.post('/ingresar',controladorUsuario.postIngresar);


module.exports = router;