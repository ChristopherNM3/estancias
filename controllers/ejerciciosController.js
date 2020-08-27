//Controladores para llevar a los diferentes ejercicios y preguntas.
const dbConnection = require('../models/dbConnection');
const conexion = dbConnection();

/*exports.getVideo = (req,res) =>{
    res.render('./ejercicios/video',{
        pageTitle: 'Video',
    });
};

exports.getImagen = (req,res) =>{
    res.render('./ejercicios/imagenes',{
        pageTitle: 'Imagen',
    });
};

exports.getAudio = (req,res) =>{
    res.render('./ejercicios/audio',{
        pageTitle: 'Audio',
    });
};

exports.getTexto = (req,res) =>{
    res.render('./ejercicios/texto',{
        pageTitle: 'Texto',
    });
};

exports.getFisico = (req,res) =>{
    res.render('./ejercicios/fisico',{
        pageTitle: 'Fisico',
    });
};*/

exports.getMuestra10 = (req,res) =>{
    res.render('./ejercicios/sustancia10',{
        pageTitle:'Prueba',
    });
}

exports.getMuestra11 = (req,res) =>{
    conexion.query('SELECT MAX(id_usuario) AS id_user FROM usuario',(err,result)=>{
        res.render('./ejercicios/sustancia11',{
            pageTitle:'Prueba',
            video:result,
        });
    });  
};

exports.getMuestra12 = (req,res) =>{
    conexion.query('SELECT MAX(id_usuario) AS id_user FROM usuario',(err,result)=>{
        res.render('./ejercicios/sustancia12',{
            pageTitle:'Prueba',
            video:result,
        });
    })
    
};

exports.getMuestra13 = (req,res) =>{
    conexion.query('SELECT MAX(id_usuario) AS id_user FROM usuario',(err,result)=>{
        res.render('./ejercicios/sustancia13',{
            pageTitle:'Prueba',
            video:result,
        });
    });
};

exports.getMuestra14 = (req,res) =>{
    conexion.query('SELECT MAX(id_usuario) AS id_user FROM usuario',(err,result)=>{
        res.render('./ejercicios/sustancia14',{
            pageTitle:'Prueba',
            video:result,      
        });
    });
};

exports.getMuestra15 = (req,res) =>{
    conexion.query('SELECT MAX(id_usuario) AS id_user FROM usuario',(err,result)=>{
        res.render('./ejercicios/sustancia15',{
            pageTitle:'Prueba',
            video:result,
        }); 
    });
};

exports.getMuestra16 = (req,res) =>{
    conexion.query('SELECT MAX(id_usuario) AS id_user FROM usuario',(err,result)=>{
        res.render('./ejercicios/sustancia16',{
            pageTitle:'Prueba',
            video:result,
        });
    });
};

exports.getMuestra17 = (req,res) =>{
    conexion.query('SELECT MAX(id_usuario) AS id_user FROM usuario',(err,result)=>{
        res.render('./ejercicios/sustancia17',{
            pageTitle:'Prueba',
            video:result,
        });
    });
};

exports.getMuestra18 = (req,res) =>{
    conexion.query('SELECT MAX(id_usuario) AS id_user FROM usuario',(err,result)=>{
        res.render('./ejercicios/sustancia18',{
            pageTitle:'Prueba',
            video:result,
        });
    });
};

exports.postMuestra11 = (req,res)=>{
    cm = req.body.calificacion;
    console.log(cm);
    conexion.query("SELECT MAX(id_usuario) AS id_user from usuario",(err,rows)=>{
        console.log(rows[0].id_user)
        id_usuar = rows[0].id_user;
        conexion.query("INSERT INTO calificacion_muestras set ?",{
            id_usuario: id_usuar,
            id_muestras : '1', 
            calificacion: cm },(err,result)=>{
            console.log(err)
            res.redirect('/sustancia2');
        });
    });
};

exports.postMuestra12 = (req,res)=>{
    cm = req.body.calificacion;
    conexion.query("SELECT MAX(id_usuario) AS id_user from usuario",(err,rows)=>{
        console.log(rows[0].id_user)
        id_usuar = rows[0].id_user;
        conexion.query("INSERT INTO calificacion_muestras set ?",{
            id_usuario: id_usuar,
            id_muestras : '2', 
            calificacion: cm },(err,result)=>{
            console.log(err)
            res.redirect('/sustancia3');
        });
    });
};

exports.postMuestra13 = (req,res)=>{
    cm = req.body.calificacion;
    conexion.query("SELECT MAX(id_usuario) AS id_user from usuario",(err,rows)=>{
        console.log(rows[0].id_user)
        id_usuar = rows[0].id_user;
        conexion.query("INSERT INTO calificacion_muestras set ?",{
            id_usuario: id_usuar,
            id_muestras : '3', 
            calificacion: cm },(err,result)=>{
            console.log(err)
            res.redirect('/sustancia4');
        });
    });
};

exports.postMuestra14 = (req,res)=>{
    cm = req.body.calificacion;
    conexion.query("SELECT MAX(id_usuario) AS id_user from usuario",(err,rows)=>{
        console.log(rows[0].id_user)
        id_usuar = rows[0].id_user;
        conexion.query("INSERT INTO calificacion_muestras set ?",{
            id_usuario: id_usuar,
            id_muestras : '4', 
            calificacion: cm},(err,result)=>{
            console.log(err)
            res.redirect('/sustancia5');
        });
    });
};

exports.postMuestra15 = (req,res)=>{
    cm = req.body.calificacion;
    conexion.query("SELECT MAX(id_usuario) AS id_user from usuario",(err,rows)=>{
        console.log(rows[0].id_user)
        id_usuar = rows[0].id_user;
        conexion.query("INSERT INTO calificacion_muestras set ?",{
            id_usuario: id_usuar,
            id_muestras : '5', 
            calificacion: cm },(err,result)=>{
            console.log(err)
            res.redirect('/sustancia6');
        });
    });
};

exports.postMuestra16 = (req,res)=>{
    cm = req.body.calificacion;
    conexion.query("SELECT MAX(id_usuario) AS id_user from usuario",(err,rows)=>{
        console.log(rows[0].id_user)
        id_usuar = rows[0].id_user;
        conexion.query("INSERT INTO calificacion_muestras set ?",{
            id_usuario: id_usuar,
            id_muestras : '6', 
            calificacion: cm },(err,result)=>{
            console.log(err)
            res.redirect('/sustancia7');
        });
    });
};

exports.postMuestra17 = (req,res)=>{
    cm = req.body.calificacion;
    console.log(cm);
    conexion.query("SELECT MAX(id_usuario) AS id_user from usuario",(err,rows)=>{
        console.log(rows[0].id_user)
        id_usuar = rows[0].id_user;
        conexion.query("INSERT INTO calificacion_muestras set ?",{
            id_usuario: id_usuar,
            id_muestras : '7', 
            calificacion: cm },(err,result)=>{
            console.log(err)
            res.redirect('/sustancia8');
        });
    });
};

exports.postMuestra18 = (req,res)=>{
    cm = req.body.calificacion;
    conexion.query("SELECT MAX(id_usuario) AS id_user from usuario",(err,rows)=>{
        console.log(rows[0].id_user)
        id_usuar = rows[0].id_user;
        conexion.query("INSERT INTO calificacion_muestras set ?",{
            id_usuario: id_usuar,
            id_muestras : '8', 
            calificacion: cm },(err,result)=>{
            console.log(err)
            res.redirect('/sustancia');
        });
    });
};