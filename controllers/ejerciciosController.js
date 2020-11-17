//Controladores para llevar a los diferentes ejercicios y preguntas.
const dbConnection = require('../models/dbConnection');
const { post } = require('../routes/rutaejercicios');
const conexion = dbConnection();
var bmi;
const mysql = require('mysql');

exports.getMuestra10 = (req,res) =>{
    res.render('./ejercicios/sustancia10',{
        pageTitle:'Prueba',
    });
}

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
    
    conexion.query("SELECT id FROM calificacion_intensidad WHERE id_usuario = ? AND id_intensidad = 1", id, (err, rows) => {
        if(err) throw err;
        if(rows[0]==null)
        {
            conexion.query("INSERT INTO calificacion_intensidad set ?",{
                id_usuario: id,
                id_intensidad : '1', 
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
    
    conexion.query("SELECT id FROM calificacion_intensidad WHERE id_usuario = ? AND id_intensidad = 2", id, (err, rows) => {
        if(err) throw err;
        if(rows[0]==null)
        {
            conexion.query("INSERT INTO calificacion_intensidad set ?",{
                id_usuario: id,
                id_intensidad : '2', 
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
    
    conexion.query("SELECT id FROM calificacion_intensidad WHERE id_usuario = ? AND id_intensidad = 3", id, (err, rows) => {
        if(err) throw err;
        if(rows[0]==null)
        {
            conexion.query("INSERT INTO calificacion_intensidad set ?",{
                id_usuario: id,
                id_intensidad : '3', 
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
    
    conexion.query("SELECT id FROM calificacion_intensidad WHERE id_usuario = ? AND id_intensidad = 4", id, (err, rows) => {
        if(err) throw err;
        if(rows[0]==null)
        {
            conexion.query("INSERT INTO calificacion_intensidad set ?",{
                id_usuario: id,
                id_intensidad : '4', 
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
    
    conexion.query("SELECT id FROM calificacion_intensidad WHERE id_usuario = ? AND id_intensidad = 5", id, (err, rows) => {
        if(err) throw err;
        if(rows[0]==null)
        {
            conexion.query("INSERT INTO calificacion_intensidad set ?",{
                id_usuario: id,
                id_intensidad : '5', 
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
    
    conexion.query("SELECT id FROM calificacion_intensidad WHERE id_usuario = ? AND id_intensidad = 6", id, (err, rows) => {
        if(err) throw err;
        if(rows[0]==null)
        {
            conexion.query("INSERT INTO calificacion_intensidad set ?",{
                id_usuario: id,
                id_intensidad : '6', 
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
    
    conexion.query("SELECT id FROM calificacion_intensidad WHERE id_usuario = ? AND id_intensidad = 7", id, (err, rows) => {
        if(err) throw err;
        if(rows[0]==null)
        {
            conexion.query("INSERT INTO calificacion_intensidad set ?",{
                id_usuario: id,
                id_intensidad : '7', 
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
    
    conexion.query("SELECT id FROM calificacion_intensidad WHERE id_usuario = ? AND id_intensidad = 8", id, (err, rows) => {
        if(err) throw err;
        if(rows[0]==null)
        {
            conexion.query("INSERT INTO calificacion_intensidad set ?",{
                id_usuario: id,
                id_intensidad : '8', 
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
        pageTitle:"Estimulacion",
        video: id
    });
};

exports.postRange1 = (req,res)=>{
    const id = req.body.id;
    cm = req.body.calificacion;
    console.log("Insert xd");

    conexion.query("INSERT INTO calificacion_estimulaciones set ?",{
        id_usuario: id,
        id_estimulacion : '1', 
        calificacion: cm,
        },(err,result)=>{
        console.log(err)
    });
    res.render('./rango/rangoMedio',{
        pageTitle:'Prueba',
        video: id,
    });
};

exports.postRange2 = (req,res)=>{
    const id = req.body.id;
    cm = req.body.calificacion;
    conexion.query("INSERT INTO calificacion_estimulaciones set ?",{
        id_usuario: id,
        id_estimulacion : '2', 
        calificacion: cm,
        },(err,result)=>{
        console.log(err)
    });
    
    res.render('./rango/rangoMedioAlto',{
        pageTitle:'Prueba',
        video: id,
    });
};

exports.postRange3 = (req,res)=>{
    const id = req.body.id;
    cm = req.body.calificacion;

    conexion.query("INSERT INTO calificacion_estimulaciones set ?",{
        id_usuario: id,
        id_estimulacion : '3', 
        calificacion: cm,
        },(err,result)=>{
        console.log(err)
    });
    res.redirect('./sustancia');
};

exports.getRange4 = (req,res)=>{
    res.render('./rango/rangoAlto',{
        pageTitle:"Muestra Rango",
    });
};

//PREFERENCIAS
exports.postPreferencias = (req,res)=>{
    const id = req.body.id;
    const visita = req.body.visita;
    conexion.query("SELECT * FROM lista_preferencias ", (err, rows) => {
        res.render('./ejercicios/preferencias',{
            pageTitle:'Preferencias',
            pruebas: rows,
            video: id,
            rnd: Math.floor(Math.random() * 2),
            visita: visita,
        });
    });
};

exports.postGuardarPreferencias = (req,res)=>{
    const id = req.body.id;
    const visita = req.body.visita;
    var body = JSON.parse(JSON.stringify(req.body));
    console.log(body);
    var obj = [];
    for(var i in body) 
        obj.push(body[i].split(' '));
    obj.pop();
    obj.pop();
    for(let i=0; i<obj.length; i++){
        conexion.query("INSERT INTO calificacion_preferencias set ?",{
            id_usuario: id,
            id_gusto: obj[i][0], 
            id_no_gusto: obj[i][1],
            id_lista: obj[i][2],
        });
    }
    conexion.query("SELECT id_usuario FROM usuario WHERE id_usuario = ?",id, (err,result)=>{
        res.render('./main',{
            pageTitle:'Main',
            usuario: result[0].id_usuario,
            visita: visita,
        });
    });
};

exports.postUmbral = (req,res)=>{
    const id = parseInt(req.body.id);
    const visita = req.body.visita;
    console.log(req.body);
    const respuesta = (req.body.respuesta=="false")? false: true;
    conexion.query("SELECT * FROM calificacion_umbrales WHERE id_usuario = ? AND visita = " + mysql.escape(visita),id,(err, consulta)=>{
        conexion.query("SELECT * FROM lista_umbrales", (err, lista) => {
            
            var posicion = parseInt(lista.length/2);
            var numVueltas = 0;
            var numPrueba = 1;
            if(consulta[0]!=null){
                var vueltas = consulta[0].direccion;
                for(var i in consulta){
                    if(consulta[i].direccion!=vueltas && consulta[i].direccion!="ninguna" && consulta[i].direccion!="indefinido"|| consulta[i].direccion=="ninguna"){
                        numVueltas++;
                        vueltas = consulta[i].direccion;
                    }
                }
            }
            if(req.body.respuesta != undefined){

                var cambio_lista = false;
                var cambio = "indefinido";
                var posicion;

                if(consulta[0]==null){
                    if(!respuesta){
                        cambio_lista = true;
                        cambio = "derecha";
                    } 
                } else {
                    var ultimo = (consulta.length - 1);
                    numPrueba = (consulta[ultimo].prueba + 1);
                    posicion = consulta[ultimo].lista;

                    if(consulta[ultimo].cambio_lista){
                        if(consulta[ultimo].direccion=="izquierda")
                            posicion = consulta[ultimo].lista - 1;
                        else
                            posicion = consulta[ultimo].lista + 1;
                    }

                    if(consulta[ultimo].direccion=="indefinido" && respuesta && posicion || !respuesta && posicion != (lista.length-1))
                        cambio_lista = true;

                    if(!respuesta && posicion != (lista.length-1))
                        cambio = "derecha";

                    if(respuesta && posicion != 0 && consulta[ultimo].direccion=="indefinido")
                        cambio = "izquierda";
                    
                    if(!respuesta && posicion == (lista.length-1) || respuesta && posicion == 0 && consulta[ultimo].direccion=="indefinido")
                        cambio = "ninguna";

                    if(cambio!=vueltas && cambio!="ninguna" && cambio!="indefinido"|| cambio=="ninguna")
                        numVueltas++;
                    
                }
                if(numVueltas<=7){
                    conexion.query("INSERT INTO calificacion_umbrales set ?",{
                        id_usuario: id,
                        prueba: numPrueba,
                        visita: visita,
                        respuesta: respuesta,
                        direccion: cambio,
                        lista: posicion,
                        cambio_lista: cambio_lista,
                    });
                }
            }
            
            if(numVueltas >= 7){
                conexion.query("SELECT id_usuario FROM usuario WHERE id_usuario = ?", id, (err,result)=>{
                    console.log(result);
                    res.render('./main',{
                        pageTitle:'Main',
                        usuario: result[0].id_usuario,
                        visita: visita,
                    });
                });
            } else {
                res.redirect('/umbral?ID=' + id +'/'+ visita +'/'+ numVueltas);
            }
        });
    });
};


exports.getUmbral = (req,res)=> {
    var datos = req.query.ID.split('/');
    id = datos[0];
    visita = datos[1];
    conexion.query("SELECT id_usuario FROM usuario WHERE id_usuario = ?",id, (err,result)=>{
        if(result[0]==null)
            res.redirect('/');
        conexion.query("SELECT * FROM calificacion_umbrales WHERE id_usuario = ?  AND visita = " + mysql.escape(visita) + " ORDER BY prueba DESC LIMIT 1 ",id,(err, consulta)=>{
            conexion.query("SELECT * FROM lista_umbrales", (err, lista) => {
                var posicion = parseInt(lista.length/2);
                var prueba = 1;
                if(consulta[0]!=null){
                    posicion = consulta[0].lista; 
                    posicion = (consulta[0].direccion=="izquierda")? posicion-1 : ((consulta[0].direccion=="derecha")? posicion+1: posicion);
                    prueba = consulta[0].prueba + 1;
                }
                var obj = [lista[posicion].dulceMas, lista[posicion].dulceMenos, prueba];
                res.render('./ejercicios/umbral',{
                    pageTitle:'Estimulos',
                    video: id,
                    lista: obj,
                    visita: visita,
                });
            });
        });
    });
};
