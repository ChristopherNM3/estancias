//Ruta especifica para las preguntas o ejercicios.


const express = require('express');
const router = express.Router();
const controladorEjercicio = require('../controllers/ejerciciosController');

router.get('/video',controladorEjercicio.getVideo);
router.get('/audio',controladorEjercicio.getAudio);
router.get('/imagenes',controladorEjercicio.getImagen);
router.get('/texto',controladorEjercicio.getTexto);
router.get('/fisico',controladorEjercicio.getFisico);

module.exports = router;