//Controladores para llevar a los diferentes ejercicios y preguntas.
const dbConnection = require('../models/dbConnection');
const conexion = dbConnection();
var bmi;

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


//RANGO-UMBRAL
exports.getRange = (req,res)=>{
    const id = req.body.id;
    res.render('./rango/rangoBajo',{
        pageTitle:"Umbral",
        video: id
    });
};

exports.postRange1 = (req,res)=>{
    const id = req.body.id;
    cm = req.body.calificacion;
    
    if(cm > 60){
        bmi = 'Super catadores';
    }
    if((cm >= 12) && (cm <= 60)){
        bmi = 'Medios catadores';
    }
    if(cm < 12){
        bmi = 'No catadores';
    }
    console.log(cm);
    
    conexion.query("SELECT id FROM calificacion_umbral WHERE id_usuario = ? AND id_umbral = 1", id, (err, rows) => {
        if(err) throw err;
        if(rows[0]==null)
        {
            conexion.query("INSERT INTO calificacion_umbral set ?",{
                id_usuario: id,
                id_umbral : '1', 
                calificacion: cm,
                BMI: bmi },(err,result)=>{
                console.log(err)
            });
        }
        res.render('./rango/rangoMedio',{
            pageTitle:'Prueba',
            video: id,
        });
    });
};

exports.postRange2 = (req,res)=>{
    const id = req.body.id;
    cm = req.body.calificacion;
    
    if(cm > 60){
        bmi = 'Super catadores';
    }
    if((cm >= 12) && (cm <= 60)){
        bmi = 'Medios catadores';
    }
    if(cm < 12){
        bmi = 'No catadores';
    }
    console.log(cm);
    
    conexion.query("SELECT id FROM calificacion_umbral WHERE id_usuario = ? AND id_umbral = 2", id, (err, rows) => {
        if(err) throw err;
        if(rows[0]==null)
        {
            conexion.query("INSERT INTO calificacion_umbral set ?",{
                id_usuario: id,
                id_umbral : '2', 
                calificacion: cm,
                BMI: bmi },(err,result)=>{
                console.log(err)
            });
        }
        res.render('./rango/rangoMedioAlto',{
            pageTitle:'Prueba',
            video: id,
        });
    });
};

exports.postRange3 = (req,res)=>{
    const id = req.body.id;
    cm = req.body.calificacion;
    
    if(cm > 60){
        bmi = 'Super catadores';
    }
    if((cm >= 12) && (cm <= 60)){
        bmi = 'Medios catadores';
    }
    if(cm < 12){
        bmi = 'No catadores';
    }
    console.log(cm);
    
    conexion.query("SELECT id FROM calificacion_umbral WHERE id_usuario = ? AND id_umbral = 3", id, (err, rows) => {
        if(err) throw err;
        if(rows[0]==null)
        {
            conexion.query("INSERT INTO calificacion_umbral set ?",{
                id_usuario: id,
                id_umbral : '3', 
                calificacion: cm,
                BMI: bmi },(err,result)=>{
                console.log(err)
            });
        }
        res.redirect('./sustancia');
    });
};

exports.getRange4 = (req,res)=>{
    res.render('./rango/rangoAlto',{
        pageTitle:"Muestra Rango",
    });
};

/*exports.postRange = (req,res)=>{
    const rango = req.body.calificacion;
    if(rango < 25){
        res.redirect('/rango4');
    }
    if((rango > 25) && (rango < 50)){
        res.redirect('./rango2');
    }
    if((rango > 50)&&(rango<75)){
        res.redirect('./rango3');
    }
    if(rango > 75){
        res.redirect('/rango')
    }
};*/

//PREFERENCIAS
exports.getPreferencias = (req,res)=>{
    //const id = req.body.id;
    conexion.query("SELECT * FROM listas", (err, rows) => {
        console.log(rows);
        res.render('./ejercicios/preferencias',{
            pageTitle:'Preferencias',
            platillos: rows,
            video: Math.floor(Math.random() * 10),
            rnd: Math.floor(Math.random() * 2),
        });
    });
};

exports.postGuardarPreferencias = (req,res)=>{
    const id = req.body.id;
    var body = JSON.parse(JSON.stringify(req.body));
    var obj = [];
    for(var i in body) 
        obj.push(body[i].split(' '));
    obj.pop();
    for(let i=0; i<obj.length; i++){
        conexion.query("INSERT INTO gustos set ?",{
            id_usuario: id,
            id_gusto: obj[i][0], 
            id_no_gusto: obj[i][1],
            id_lista: obj[i][2],
        });
    }
    res.redirect('/sustancia');
};