//Rutas especificas para todos los procesos con el usuario

const express = require('express');
const router = express.Router();
const controladorUsuario = require('../controllers/usuarioController');

router.get('/',controladorUsuario.getUsuario);
router.post('/registrando',controladorUsuario.postUsuario);
router.post('/reiniciar',controladorUsuario.postReiniciarUsuario)

module.exports = router;