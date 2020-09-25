const dbConnection = require('../models/dbConnection');//Busca la conexion en el archivo dbConnectios.js
const conexion = dbConnection();//Se crea una instancia.

//Se busca en toda la BD se muestran los datos en una tabla. Se redirige a /admin
exports.getAdmi = (req,res) =>{
    conexion.query('SELECT * FROM usuario',(err,result)=>{
        console.log(result);
        res.render('./admi/indexAdmi',{
            pageTitle: 'Administracion',
            datos: result,
        });
    })
}

exports.getResult = (req,res)=>{
    conexion.query('SELECT * FROM calificacion_muestras',(err,result)=>{
        res.render('./admi/showResults',{
            pageTitle:'Resultados',
            datos:result
        })
    })
}