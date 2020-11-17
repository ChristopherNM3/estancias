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
    
    const {nombre,edad,peso,altura,cintura} = req.body;
    if(req.body.id == "") {
        conexion.query("INSERT INTO usuario SET ?",{
            nombre,
        });
    }
    conexion.query('SELECT * FROM usuario ORDER BY id_usuario DESC LIMIT 1', (err,result)=>{
        var id = (req.body.id == "")? result[0].id_usuario : req.body.id;
        conexion.query('SELECT id_usuario FROM usuario WHERE id_usuario = ?', id, (err,verificar)=>{
            if(verificar[0]!=null){
                conexion.query("SELECT * FROM visitas WHERE id_usuario = ? ORDER BY visita DESC LIMIT 1 ",id,(err, consulta)=>{
                    var visita = (consulta[0]==null)? 1: consulta[0].visita+1;
                    conexion.query("INSERT INTO visitas SET ?",{
                        id_usuario: id,
                        visita: visita,
                        edad,
                        peso,
                        altura,
                        cintura,
                        imc,
                    });
                    res.render('./vistaNumero',{
                        pageTitle:'Numero',
                        usuario: id,
                        visita: visita,
                    });
                });
            } else {
                res.redirect('/');
            }
        });
    });
};

exports.postMain = (req,res)=>{
    const id = req.body.id;
    const visita = req.body.visita;
    res.render('./main',{
        pageTitle:"Main",
        usuario: id,
        visita: visita,
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