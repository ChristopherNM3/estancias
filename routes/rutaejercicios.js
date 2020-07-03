//Ruta especifica para las preguntas o ejercicios.


const express = require('express');
const router = express.Router();
const controladorEjercicio = require('../controllers/ejerciciosController');

router.get('/video',controladorEjercicio.getVideo);
router.get('/audio',controladorEjercicio.getAudio);
router.get('/imagenes',controladorEjercicio.getImagen);
router.get('/texto',controladorEjercicio.getTexto);
router.get('/fisico',controladorEjercicio.getFisico);
router.get('/sustancia1',controladorEjercicio.getComida1);
router.get('/sustancia2',controladorEjercicio.getSustancia2);
router.get('/sustancia3',controladorEjercicio.getSustancia3);

module.exports = router;