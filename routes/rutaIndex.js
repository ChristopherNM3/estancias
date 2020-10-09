//Rutas especificas para los menus o pantallas principales.

const express = require('express');
const router = express.Router();
const controladorIndex = require('../controllers/indexController');

router.get('/index',controladorIndex.getIndex);
//router.get('/main',controladorIndex.getMain);



module.exports = router;