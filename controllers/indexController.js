const dbConnection = require('../models/dbConnection'); //Busca la conexion en el archivo dbConnectios.js
const conexion = dbConnection();//Se crea una instancia.



exports.getIndex = (req,res)=>{
    res.render('./index',{
        pageTitle:'Index',
        path:'/',
    });
};

//Se busca en la BD y se redirige al main.
exports.getMain = (req,res)=>{
    conexion.query('SELECT * FROM usuario', (err,result)=>{
        console.log(result);
        res.render('./main',{
            pageTitle:'Main',
            usuario: result,
        });
    });
};