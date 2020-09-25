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

/*exports.getMuestra11 = (req,res) =>{
    conexion.query('SELECT MAX(id_usuario) AS id_user FROM usuario',(err,result)=>{
        res.render('./ejercicios/sustancia11',{
            pageTitle:'Prueba',
            video: result,
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
};*/

exports.getMuestra11 = (req,res) =>{
    const id = req.body.id;
    res.render('./ejercicios/sustancia11',{
        pageTitle:'Prueba',
        video: id,
    });
};

exports.postMuestra11 = (req,res)=>{
    const id = req.body.id;
    cm = req.body.calificacion;
    console.log(cm);
    
    conexion.query("SELECT id FROM calificacion_muestras WHERE id_usuario = ? AND id_muestras = 1", id, (err, rows) => {
        if(err) throw err;
        if(rows[0]==null)
        {
            conexion.query("INSERT INTO calificacion_muestras set ?",{
                id_usuario: id,
                id_muestras : '1', 
                calificacion: cm },(err,result)=>{
                console.log(err)
            });
        }
        res.render('./ejercicios/sustancia12',{
            pageTitle:'Prueba',
            video: id,
        });
    });
};

exports.postMuestra12 = (req,res)=>{
    const id = req.body.id;
    cm = req.body.calificacion;
    console.log(cm);
    
    conexion.query("SELECT id FROM calificacion_muestras WHERE id_usuario = ? AND id_muestras = 2", id, (err, rows) => {
        if(err) throw err;
        if(rows[0]==null)
        {
            conexion.query("INSERT INTO calificacion_muestras set ?",{
                id_usuario: id,
                id_muestras : '2', 
                calificacion: cm },(err,result)=>{
                console.log(err)
            });
        }
        res.render('./ejercicios/sustancia13',{
            pageTitle:'Prueba',
            video: id,
        });
    });
};

exports.postMuestra13 = (req,res)=>{
    const id = req.body.id;
    cm = req.body.calificacion;
    console.log(cm);
    
    conexion.query("SELECT id FROM calificacion_muestras WHERE id_usuario = ? AND id_muestras = 3", id, (err, rows) => {
        if(err) throw err;
        if(rows[0]==null)
        {
            conexion.query("INSERT INTO calificacion_muestras set ?",{
                id_usuario: id,
                id_muestras : '3', 
                calificacion: cm },(err,result)=>{
                console.log(err)
            });
        }
        res.render('./ejercicios/sustancia14',{
            pageTitle:'Prueba',
            video: id,
        });
    });
};

exports.postMuestra14 = (req,res)=>{
    const id = req.body.id;
    cm = req.body.calificacion;
    console.log(cm);
    
    conexion.query("SELECT id FROM calificacion_muestras WHERE id_usuario = ? AND id_muestras = 4", id, (err, rows) => {
        if(err) throw err;
        if(rows[0]==null)
        {
            conexion.query("INSERT INTO calificacion_muestras set ?",{
                id_usuario: id,
                id_muestras : '4', 
                calificacion: cm },(err,result)=>{
                console.log(err)
            });
        }
        res.render('./ejercicios/sustancia15',{
            pageTitle:'Prueba',
            video: id,
        });
    });
};

exports.postMuestra15 = (req,res)=>{
    const id = req.body.id;
    cm = req.body.calificacion;
    console.log(cm);
    
    conexion.query("SELECT id FROM calificacion_muestras WHERE id_usuario = ? AND id_muestras = 5", id, (err, rows) => {
        if(err) throw err;
        if(rows[0]==null)
        {
            conexion.query("INSERT INTO calificacion_muestras set ?",{
                id_usuario: id,
                id_muestras : '5', 
                calificacion: cm },(err,result)=>{
                console.log(err)
            });
        }
        res.render('./ejercicios/sustancia16',{
            pageTitle:'Prueba',
            video: id,
        });
    });
};

exports.postMuestra16 = (req,res)=>{
    const id = req.body.id;
    cm = req.body.calificacion;
    console.log(cm);
    
    conexion.query("SELECT id FROM calificacion_muestras WHERE id_usuario = ? AND id_muestras = 6", id, (err, rows) => {
        if(err) throw err;
        if(rows[0]==null)
        {
            conexion.query("INSERT INTO calificacion_muestras set ?",{
                id_usuario: id,
                id_muestras : '6', 
                calificacion: cm },(err,result)=>{
                console.log(err)
            });
        }
        res.render('./ejercicios/sustancia17',{
            pageTitle:'Prueba',
            video: id,
        });
    });
};

exports.postMuestra17 = (req,res)=>{
    const id = req.body.id;
    cm = req.body.calificacion;
    console.log(cm);
    
    conexion.query("SELECT id FROM calificacion_muestras WHERE id_usuario = ? AND id_muestras = 7", id, (err, rows) => {
        if(err) throw err;
        if(rows[0]==null)
        {
            conexion.query("INSERT INTO calificacion_muestras set ?",{
                id_usuario: id,
                id_muestras : '7', 
                calificacion: cm },(err,result)=>{
                console.log(err)
            });
        }
        res.render('./ejercicios/sustancia18',{
            pageTitle:'Prueba',
            video: id,
        });
    });
};

exports.postMuestra18 = (req,res)=>{
    const id = req.body.id;
    cm = req.body.calificacion;
    console.log(cm);
    
    conexion.query("SELECT id FROM calificacion_muestras WHERE id_usuario = ? AND id_muestras = 8", id, (err, rows) => {
        if(err) throw err;
        if(rows[0]==null)
        {
            conexion.query("INSERT INTO calificacion_muestras set ?",{
                id_usuario: id,
                id_muestras : '8', 
                calificacion: cm },(err,result)=>{
                console.log(err)
            });
        }
        res.redirect('/sustancia');
    });
};
