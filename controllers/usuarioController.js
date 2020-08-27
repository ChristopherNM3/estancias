const dbConnection = require('../models/dbConnection'); //Busca la conexion en el archivo dbConnectios.js
const conexion = dbConnection();//Se crea una instancia.

exports.getUsuario = (req,res) =>{
    res.render('./registro',{
        pageTitle:'Registro',
    });
};

//Introduce el usuario nuevo y redirige a main
exports.postUsuario = (req,res)=>{
    var alturaimc = req.body.altura;
    var pesoimc = req.body.peso;
    var imc = pesoimc/(alturaimc*alturaimc);
    console.log(imc);
    const {nombre,edad,peso,altura,cintura} = req.body;
    conexion.query("INSERT INTO usuario SET ?",{
        nombre,
        edad,
        peso,
        altura,
        cintura
    },(err,result)=>{
        console.log(err)
        res.redirect('/main');
    });
};

//Prueba para actualizar un estado y que se cierre las respuestas de ese usuario
exports.postReiniciarUsuario = (req,res)=>{
    console.log(req.body)
    const {estado} = req.body;
    conexion.query('UPDATE usuario SET estado = 0 WHERE id_usuario = 6',{
        estado,
    },(err,result)=>{
        res.redirect('/');
    });
}