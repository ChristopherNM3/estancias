const dbConnection = require('../models/dbConnection'); //Busca la conexion en el archivo dbConnectios.js
const conexion = dbConnection();//Se crea una instancia.

exports.getUsuario = (req,res) =>{
    res.render('./registro',{
        pageTitle:'Registro',
    });
};

exports.getLogin = (req,res) =>{
    res.render('./login',{
        pageTitle:'Login',
    });
};

exports.postIngresar =(req,res)=>{
    const numero = req.body.numero;
    conexion.query("SELECT id_usuario FROM usuario WHERE id_usuario = ?",numero, (err,result)=>{
        if(result[0]==null)
            res.redirect('/');
        res.render('./main',{
            pageTitle:'Main',
            usuario:result,
        });

    });
}

//Introduce el usuario nuevo y redirige a main
exports.postUsuario = (req,res)=>{
    var alturaimc = req.body.altura;
    var pesoimc = req.body.peso;
    var imc = pesoimc/(alturaimc*alturaimc);
    console.log(imc);

    const {nombre,edad,peso,altura,cintura,id} = req.body;
    if(req.body.id == "") {
        console.log("entro en el if")
        conexion.query("INSERT INTO usuario SET ?",{
            nombre,
            edad,
            peso,
            altura,
            cintura,
            imc,
            id_origen:null
        },(err,result)=>{
            console.log(err)
        });
        conexion.query('SELECT * FROM usuario ORDER BY id_usuario DESC LIMIT 1', (err,result)=>{
            res.render('./vistaNumero',{
                pageTitle:'Numero',
                usuario: result,
            });
        });
    }else{
        console.log("Entro en el else")
        conexion.query("INSERT INTO usuario SET ?",{
            nombre,
            edad,
            peso,
            altura,
            cintura,
            imc,
            id_origen:id
        },(err,result)=>{
            console.log(err)
        });
        conexion.query('SELECT * FROM usuario ORDER BY id_usuario DESC LIMIT 1', (err,result)=>{
            res.render('./main',{
                pageTitle:'Main',
                usuario: result,
            });
        });
    }
};

exports.postMain = (req,res)=>{
    const id = req.body.id;
    res.render('./main',{
        pageTitle:"Main",
        usuario: id
    })
}

//Prueba para actualizar un estado y que se cierre las respuestas de ese usuario
exports.postReiniciarUsuario = (req,res)=>{
    const {estado} = req.body;
    conexion.query('UPDATE usuario SET estado = 0 WHERE id_usuario = 6',{
        estado,
    },(err,result)=>{
        res.redirect('/');
    });
}