//Conexion a la BD

const mysql = require('mysql'); //Instancio una libreria de mysql de un modulo instalado

module.exports = () => {
    return mysql.createConnection({
        host: 'localhost', //Direccion de la BD
        user: 'root',
        password: '',
        database: 'prueba' //Nombre de la BD
    });
};