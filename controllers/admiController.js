const dbConnection = require('../models/dbConnection');//Busca la conexion en el archivo dbConnectios.js
const conexion = dbConnection();//Se crea una instancia.

//Se busca en toda la BD se muestran los datos en una tabla. Se redirige a /admin
exports.getAdmi = (req,res) =>{
    conexion.query('SELECT usuario.nombre, visitas.* FROM usuario LEFT JOIN visitas ON visitas.id_usuario = usuario.id_usuario WHERE usuario.id_usuario IS NOT NULL',(err,result)=>{
        console.log(result);
        res.render('./admi/indexAdmi',{
            pageTitle: 'Administracion',
            datos: result,
        });
    })
}

exports.getPreferenciasResult = (req,res) =>{
    conexion.query('SELECT usuario.nombre, calificacion_preferencias.* FROM usuario RIGHT JOIN calificacion_preferencias ON calificacion_preferencias.id_usuario = usuario.id_usuario WHERE usuario.id_usuario IS NOT NULL',(err,result)=>{
        console.log(result);
        res.render('./admi/showPreferencias',{
            pageTitle: 'Resultados preferencias',
            datos: result,
        });
    })
}

exports.getUmbralResult = (req,res) =>{
    conexion.query('SELECT usuario.nombre, calificacion_umbrales.* FROM usuario RIGHT JOIN calificacion_umbrales ON calificacion_umbrales.id_usuario = usuario.id_usuario WHERE usuario.id_usuario IS NOT NULL',(err,result)=>{
        console.log(result);
        res.render('./admi/showUmbral',{
            pageTitle: 'Resultados preferencias',
            datos: result,
        });
    })
}

exports.getResult = (req,res)=>{
    conexion.query('SELECT usuario.nombre, calificacion_muestras.* FROM usuario RIGHT JOIN calificacion_muestras ON calificacion_muestras.id_usuario = usuario.id_usuario WHERE usuario.id_usuario IS NOT NULL',(err,result)=>{
        res.render('./admi/showResults',{
            pageTitle:'Resultados',
            datos:result
        })
    })
}