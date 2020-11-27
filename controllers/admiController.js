const dbConnection = require('../models/dbConnection');//Busca la conexion en el archivo dbConnectios.js
const conexion = dbConnection();//Se crea una instancia.

//Se busca en toda la BD se muestran los datos en una tabla. Se redirige a /admin
exports.getAdmi = (req,res) =>{
    conexion.query('SELECT usuario.nombre, visitas.* FROM usuario LEFT JOIN visitas ON visitas.id_usuario = usuario.id_usuario WHERE usuario.id_usuario IS NOT NULL',(err,result)=>{
        res.render('./admi/indexAdmi',{
            pageTitle: 'Administracion',
            datos: result,
        });
    })
}

exports.getPreferenciasResult = (req,res) =>{
    conexion.query('SELECT usuario.nombre, calificacion_preferencias.* FROM usuario RIGHT JOIN calificacion_preferencias ON calificacion_preferencias.id_usuario = usuario.id_usuario WHERE usuario.id_usuario IS NOT NULL',(err,result)=>{
        res.render('./admi/preferenciasResult',{
            pageTitle: 'Resultados preferencias',
            datos: result,
        });
    })
}

exports.getUmbralResultGraso = (req,res) =>{
    conexion.query('SELECT usuario.nombre, calificacion_umbrales.* FROM usuario RIGHT JOIN calificacion_umbrales ON calificacion_umbrales.id_usuario = usuario.id_usuario WHERE usuario.id_usuario IS NOT NULL AND calificacion_umbrales.tipo = "graso" ORDER BY calificacion_umbrales.id_usuario, calificacion_umbrales.visita, calificacion_umbrales.prueba ASC ',(err,result)=>{
        res.render('./admi/showUmbral',{
            pageTitle: 'Resultados umbral graso',
            datos: result,
        });
    })
}

exports.getUmbralResultAmargo = (req,res) =>{
    conexion.query('SELECT usuario.nombre, calificacion_umbrales.* FROM usuario RIGHT JOIN calificacion_umbrales ON calificacion_umbrales.id_usuario = usuario.id_usuario WHERE usuario.id_usuario IS NOT NULL AND calificacion_umbrales.tipo = "amargo" ORDER BY calificacion_umbrales.id_usuario, calificacion_umbrales.visita, calificacion_umbrales.prueba ASC',(err,result)=>{
        //console.log(result);
        res.render('./admi/showUmbral',{
            pageTitle: 'Resultados umbral amargo',
            datos: result,
        });
    })
}

exports.getResult = (req,res)=>{
    conexion.query('SELECT usuario.nombre, calificacion_intensidad.* FROM usuario RIGHT JOIN calificacion_intensidad ON calificacion_intensidad.id_usuario = usuario.id_usuario WHERE usuario.id_usuario IS NOT NULL',(err,result)=>{
        res.render('./admi/showResults',{
            pageTitle:'Resultados',
            datos:result
        })
    })
}

exports.getEstimulacionResult = (req,res)=>{
    conexion.query('SELECT usuario.nombre, calificacion_estimulaciones.* FROM usuario RIGHT JOIN calificacion_estimulaciones ON calificacion_estimulaciones.id_usuario = usuario.id_usuario WHERE usuario.id_usuario IS NOT NULL',(err,result)=>{
        //console.log(result);
        res.render('./admi/showEstimulacion',{
            pageTitle:'Resultados',
            datos:result
        })
    })
}

