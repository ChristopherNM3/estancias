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
router.get('/sustancia2',controladorEjercicio.getMuestra12);
router.get('/sustancia3',controladorEjercicio.getMuestra13);
router.get('/sustancia4',controladorEjercicio.getMuestra14)
router.get('/sustancia5',controladorEjercicio.getMuestra15);
router.get('/sustancia6',controladorEjercicio.getMuestra16);
router.get('/sustancia7',controladorEjercicio.getMuestra17);
router.get('/sustancia8',controladorEjercicio.getMuestra18);

router.post('/saveData11',controladorEjercicio.postMuestra11);
router.post('/saveData12',controladorEjercicio.postMuestra12);
router.post('/saveData13',controladorEjercicio.postMuestra13);
router.post('/saveData14',controladorEjercicio.postMuestra14);
router.post('/saveData15',controladorEjercicio.postMuestra15);
router.post('/saveData16',controladorEjercicio.postMuestra16);
router.post('/saveData17',controladorEjercicio.postMuestra17);
router.post('/saveData18',controladorEjercicio.postMuestra18);



module.exports = router;