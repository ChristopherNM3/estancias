//Ruta especifica para las preguntas o ejercicios.


const express = require('express');
const router = express.Router();
const controladorEjercicio = require('../controllers/ejerciciosController');

/*router.get('/video',controladorEjercicio.getVideo);
router.get('/audio',controladorEjercicio.getAudio);
router.get('/imagenes',controladorEjercicio.getImagen);
router.get('/texto',controladorEjercicio.getTexto);
router.get('/fisico',controladorEjercicio.getFisico);*/
router.get('/sustancia',controladorEjercicio.getMuestra10);
router.get('/sustancia1',controladorEjercicio.getMuestra11);
/*router.get('/sustancia2',controladorEjercicio.getMuestra12);
router.get('/sustancia3',controladorEjercicio.getMuestra13);
router.get('/sustancia4',controladorEjercicio.getMuestra14)
router.get('/sustancia5',controladorEjercicio.getMuestra15);
router.get('/sustancia6',controladorEjercicio.getMuestra16);
router.get('/sustancia7',controladorEjercicio.getMuestra17);
router.get('/sustancia8',controladorEjercicio.getMuestra18);*/

router.post('/sustancia1',controladorEjercicio.getMuestra11);
router.post('/sustancia2',controladorEjercicio.postMuestra11);
router.post('/sustancia3',controladorEjercicio.postMuestra12);
router.post('/sustancia4',controladorEjercicio.postMuestra13);
router.post('/sustancia5',controladorEjercicio.postMuestra14);
router.post('/sustancia6',controladorEjercicio.postMuestra15);
router.post('/sustancia7',controladorEjercicio.postMuestra16);
router.post('/sustancia8',controladorEjercicio.postMuestra17);
router.post('/sustancia',controladorEjercicio.postMuestra18);

//rango
router.post('/rango',controladorEjercicio.getRange)
router.post('/rango1',controladorEjercicio.postRange1);
router.post('/rango2',controladorEjercicio.postRange2);
router.post('/rango3',controladorEjercicio.postRange3);
router.get('/rango4',controladorEjercicio.getRange4);
//router.post('/rango',controladorEjercicio.postRange);

//preferencias
router.post('/preferencias',controladorEjercicio.postPreferencias);
router.post('/guardar-preferencias',controladorEjercicio.postGuardarPreferencias);

router.post('/umbral',controladorEjercicio.postUmbral);

module.exports = router;