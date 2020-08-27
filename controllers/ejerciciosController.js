//Controladores para llevar a los diferentes ejercicios y preguntas.

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
*/


var id_usuar;
var cm;

exports.getTexto = (req,res) =>{
    res.render('./ejercicios/texto',{
        pageTitle: 'Texto',
    });
};

//exports.getFisico = (req,res) =>{
    //res.render('./ejercicios/fisico',{
        //pageTitle: 'Fisico',
    //});

const dbConnection = require('../models/dbConnection'); //Busca la conexion en el archivo dbConnectios.js
const conexion = dbConnection();//Se crea una instancia.

exports.getMuestra10 = (req,res) =>{
    res.render('./ejercicios/sustancia10',{
        pageTitle:'Prueba',
    });
}



exports.getMuestra11 = (req,res) =>{
    res.render('./ejercicios/sustancia11',{
        pageTitle:'Prueba',
    });
}

exports.postMuestra11 = (req,res)=>{
    cm = req.body.calificacion_muestra;
    console.log(cm);
    conexion.query("SELECT MAX(id_usuario) AS id_user from usuario",(err,rows)=>{
        console.log(rows[0].id_user)
        id_usuar = rows[0].id_user;
   
  //  const {calificacion_muestra} = req.body;
    conexion.query("INSERT INTO calificacion_muestras set ?",{
        id_usuario: id_usuar,
        id_muestras : '1', 
        calificacion_muestra: cm },(err,result)=>{
        console.log(err)
        res.redirect('/sustancia2');
    });
});
};

exports.getMuestra12 = (req,res) =>{
    res.render('./ejercicios/sustancia12',{
        pageTitle:'Prueba',
    })
};

exports.postMuestra12 = (req,res)=>{
    cm = req.body.calificacion_muestra;
    conexion.query("SELECT MAX(id_usuario) AS id_user from usuario",(err,rows)=>{
        console.log(rows[0].id_user)
        id_usuar = rows[0].id_user;
   
  //  const {calificacion_muestra} = req.body;
    conexion.query("INSERT INTO calificacion_muestras set ?",{
        id_usuario: id_usuar,
        id_muestras : '2', 
        calificacion_muestra: cm },(err,result)=>{
        console.log(err)
        res.redirect('/sustancia3');
    });
});
};

exports.getMuestra13 = (req,res) =>{
    res.render('./ejercicios/sustancia13',{
        pageTitle:'Prueba',
    })
};

exports.postMuestra13 = (req,res)=>{
    cm = req.body.calificacion_muestra;
    conexion.query("SELECT MAX(id_usuario) AS id_user from usuario",(err,rows)=>{
        console.log(rows[0].id_user)
        id_usuar = rows[0].id_user;
   
  //  const {calificacion_muestra} = req.body;
    conexion.query("INSERT INTO calificacion_muestras set ?",{
        id_usuario: id_usuar,
        id_muestras : '3', 
        calificacion_muestra: cm },(err,result)=>{
        console.log(err)
        res.redirect('/sustancia4');
    });
});
};

exports.getMuestra14 = (req,res) =>{
    res.render('./ejercicios/sustancia14',{
        pageTitle:'Prueba',
    })
};

exports.postMuestra14 = (req,res)=>{

    cm = req.body.calificacion_muestra;
    conexion.query("SELECT MAX(id_usuario) AS id_user from usuario",(err,rows)=>{
        console.log(rows[0].id_user)
        id_usuar = rows[0].id_user;
   
  //  const {calificacion_muestra} = req.body;
    conexion.query("INSERT INTO calificacion_muestras set ?",{
        id_usuario: id_usuar,
        id_muestras : '4', 
        calificacion_muestra: cm },(err,result)=>{
        console.log(err)
        res.redirect('/sustancia5');
    });
});
};

exports.getMuestra15 = (req,res) =>{
    res.render('./ejercicios/sustancia15',{
        pageTitle:'Prueba',
    })
};

exports.postMuestra15 = (req,res)=>{

    cm = req.body.calificacion_muestra;
    conexion.query("SELECT MAX(id_usuario) AS id_user from usuario",(err,rows)=>{
        console.log(rows[0].id_user)
        id_usuar = rows[0].id_user;
   
  //  const {calificacion_muestra} = req.body;
    conexion.query("INSERT INTO calificacion_muestras set ?",{
        id_usuario: id_usuar,
        id_muestras : '5', 
        calificacion_muestra: cm },(err,result)=>{
        console.log(err)
        res.redirect('/sustancia6');
    });
});
  
};

exports.getMuestra16 = (req,res) =>{
    res.render('./ejercicios/sustancia16',{
        pageTitle:'Prueba',
    })
};

exports.postMuestra16 = (req,res)=>{

    cm = req.body.calificacion_muestra;
    conexion.query("SELECT MAX(id_usuario) AS id_user from usuario",(err,rows)=>{
        console.log(rows[0].id_user)
        id_usuar = rows[0].id_user;
   
  //  const {calificacion_muestra} = req.body;
    conexion.query("INSERT INTO calificacion_muestras set ?",{
        id_usuario: id_usuar,
        id_muestras : '6', 
        calificacion_muestra: cm },(err,result)=>{
        console.log(err)
        res.redirect('/sustancia7');
    });
});
};

exports.getMuestra17 = (req,res) =>{
    res.render('./ejercicios/sustancia17',{
        pageTitle:'Prueba',
    })
};

exports.postMuestra17 = (req,res)=>{
    cm = req.body.calificacion_muestra;
    console.log(cm);
    conexion.query("SELECT MAX(id_usuario) AS id_user from usuario",(err,rows)=>{
        console.log(rows[0].id_user)
        id_usuar = rows[0].id_user;

        conexion.query("INSERT INTO calificacion_muestras set ?",{
            id_usuario: id_usuar,
            id_muestras : '7', 
            calificacion_muestra: cm },(err,result)=>{
            console.log(err)
            res.redirect('/sustancia8');
        });
    });
};

exports.getMuestra18 = (req,res) =>{
    res.render('./ejercicios/sustancia18',{
        pageTitle:'Prueba',
    })
};

exports.postMuestra18 = (req,res)=>{

    cm = req.body.calificacion_muestra;
    conexion.query("SELECT MAX(id_usuario) AS id_user from usuario",(err,rows)=>{
        console.log(rows[0].id_user)
        id_usuar = rows[0].id_user;
   
  //  const {calificacion_muestra} = req.body;
    conexion.query("INSERT INTO calificacion_muestras set ?",{
        id_usuario: id_usuar,
        id_muestras : '8', 
        calificacion_muestra: cm },(err,result)=>{
        console.log(err)
        res.redirect('/registro');
    });
});
};