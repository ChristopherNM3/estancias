//Controladores para llevar a los diferentes ejercicios y preguntas.
const dbConnection = require('../models/dbConnection');
const { post } = require('../routes/rutaejercicios');
const conexion = dbConnection();
var bmi;

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
exports.postPreferencias = (req,res)=>{
    const id = req.body.id;
    conexion.query("SELECT * FROM listas", (err, rows) => {
        res.render('./ejercicios/preferencias',{
            pageTitle:'Preferencias',
            pruebas: rows,
            video: id,
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
            usuario: result,
        });
    });
};

exports.postUmbral = (req,res)=>{
    const id = parseInt(req.body.id);
    const respuesta = (req.body.respuesta=="false")? false: true;
    conexion.query("SELECT * FROM calificacion_umbrales WHERE id_usuario = ? ",id,(err, consulta)=>{
        conexion.query("SELECT * FROM lista", (err, lista) => {
            
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
                var temp_posicion;

                if(consulta[0]==null){
                    temp_posicion = posicion;
                    if(!respuesta){
                        cambio_lista = true;
                        cambio = "derecha";
                        posicion++;
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

                    temp_posicion = posicion;

                    if(consulta[ultimo].direccion=="indefinido" && respuesta && temp_posicion || !respuesta && temp_posicion != (lista.length-1))
                        cambio_lista = true;

                    if(!respuesta && temp_posicion != (lista.length-1))
                        cambio = "derecha";

                    if(respuesta && temp_posicion != 0 && consulta[ultimo].direccion=="indefinido")
                        cambio = "izquierda";
                    
                    if(!respuesta && temp_posicion == (lista.length-1) || respuesta && temp_posicion == 0 && consulta[ultimo].direccion=="indefinido")
                        cambio = "ninguna";

                    if(cambio!=vueltas && cambio!="ninguna" && cambio!="indefinido"|| cambio=="ninguna")
                        numVueltas++;
                    
                }
                conexion.query("INSERT INTO calificacion_umbrales set ?",{
                    id_usuario: id,
                    prueba: numPrueba,
                    respuesta: respuesta,
                    direccion: cambio,
                    lista: temp_posicion,
                    cambio_lista: cambio_lista,
                });
            }
            
            if(numVueltas >= 7){
                conexion.query("SELECT id_usuario FROM usuario WHERE id_usuario = ?",id, (err,result)=>{
                    res.render('./main',{
                        pageTitle:'Main',
                        usuario: result,
                    });
                });
            } else {
                res.redirect('/umbral?ID=' + id +','+ numVueltas);
            }
        });
    });
};


exports.getUmbral = (req,res)=> {
    var id = req.query.ID.split(',');
    id = id[0];
    conexion.query("SELECT id_usuario FROM usuario WHERE id_usuario = ?",id, (err,result)=>{
        if(result[0]==null)
            res.redirect('/');
        conexion.query("SELECT * FROM calificacion_umbrales WHERE id_usuario = ? ORDER BY prueba DESC LIMIT 1 ",id,(err, consulta)=>{
            var posicion = 1;
            var prueba = 1 
            if(consulta[0]!=null){
                posicion = consulta[0].lista; 
                posicion = (consulta[0].direccion=="izquierda")? posicion-1 : ((consulta[0].direccion=="derecha")? posicion+1: posicion);
                prueba = consulta[0].prueba;
            }
            conexion.query("SELECT * FROM lista", (err, lista) => {
                var obj = [lista[posicion].dulceMas, lista[posicion].dulceMenos, prueba];
                res.render('./ejercicios/umbral',{
                    pageTitle:'Estimulos',
                    video: id,
                    lista: obj,
                });
            });
        });
    });
};
