//Ruta especificas para la parte administrativa.

const express = require('express');
const router = express.Router();
const controladorAdmi = require('../controllers/admiController');

router.get('/admi',controladorAdmi.getAdmi);
router.get('/result',controladorAdmi.getResult);
module.exports = router;