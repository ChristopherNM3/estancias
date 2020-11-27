//Librerias que se necesitan
const express = require('express');
const app = express(); // asigno todas las fuciones de express a app
const path = require('path');
const bodyParser = require('body-parser')

var fs = require('fs');
var https = require('https');
const PUERTO = 443;

app.set('view engine', 'ejs');//para que solo tome archivos ejs para la interfaz
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));//Pasar json para que la bd lo pueda leer

//Declaracion de rutas
const indexRoutes = require('./routes/rutaIndex');
const usuarioRoutes = require('./routes/rutaUsuario');
const ejerciciosRoutes = require('./routes/rutaejercicios');
const adminRoutes = require('./routes/rutaAdmi');
app.use(usuarioRoutes);
app.use(indexRoutes);
app.use(ejerciciosRoutes);
app.use(adminRoutes);


//Puerto en donde escucha el servidor
/*https.createServer({
    cert: fs.readFileSync('estancias.cer'),
    key: fs.readFileSync('estancias.key')
},app.listen(PUERTO,function(){
    console.log('Servidor https corriendo en el puerto 443');
}));*/
app.listen(3000);