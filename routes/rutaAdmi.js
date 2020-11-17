//Ruta especificas para la parte administrativa.

const express = require('express');
const router = express.Router();
const controladorAdmi = require('../controllers/admiController');

router.get('/admi',controladorAdmi.getAdmi);
router.get('/result',controladorAdmi.getResult);
router.get('/result_preferencias',controladorAdmi.getPreferenciasResult);
router.get('/result_umbral',controladorAdmi.getUmbralResult);
module.exports = router;