//Conexion a la BD

const mysql = require('mysql'); //Instancio una libreria de mysql de un modulo instalado

module.exports = () => {
    return mysql.createConnection({
        host: 'localhost', //Direccion de la BD
        user: 'root',
        password: '140794Miguel',
        database: 'estancia' //Nombre de la BD
    });
};