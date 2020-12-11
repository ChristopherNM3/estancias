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

exports.getListauUmbral = (req,res)=>{
    var numeroAleatorioMandar = new Array();
    var usados = new Array();
   
    for(var i=0;i<400;i++){
        if(usados.length != (999-110)){
            do{ 
                var numeroAleatorio = Math.floor(Math.random()*(999-100+1))+100;
                var repe = repetidos(numeroAleatorio);
            }while(repe != false)
            numeroAleatorioMandar[i] = numeroAleatorio;
            usados.push(numeroAleatorio);
        }else{
            numeroAleatorioMandar[i] = null;
        }
    }
    guardarLista();

    res.render('./admi/crearLista',{
        pageTitle:'Crear lista umbrales',
        numeroAleatorioMandar:numeroAleatorioMandar,
    })

    function repetidos(num){
        var repe = false;
        for(var i=0;i<usados.length;i++){
            if(num == usados[i]){
                repe = true;

            }
        }
        return repe;
    }

    function guardarLista(){
        var contBajoAmargo =0;
        var contAltoAmargo =100;
        var contBajoGraso =200;
        var contAltoGraso =300;
        var contIdNumero = 0;
        conexion.query('SELECT * FROM lista_umbrales',(err,result)=>{
 //////////////////Amargo
            if(result[0] == null){ 
                for(var i = 0;i<10;i++){
                    conexion.query("INSERT INTO lista_umbrales set ?",{
                        nivel:0,
                        idNumero: contIdNumero,
                        tipo:'Amargo',
                        masBajo: numeroAleatorioMandar[contBajoAmargo],
                        masAlto: numeroAleatorioMandar[contAltoAmargo],
                    });
                    contIdNumero++;
                    contBajoAmargo++;
                    contAltoAmargo++;
                }
                contIdNumero = 0; 
                for(var i = 10;i<20;i++){
                    conexion.query("INSERT INTO lista_umbrales set ?",{
                        nivel:1,
                        idNumero: contIdNumero,
                        tipo:'Amargo',
                        masBajo: numeroAleatorioMandar[contBajoAmargo],
                        masAlto: numeroAleatorioMandar[contAltoAmargo],
                    });
                    contIdNumero++; 
                    contBajoAmargo++;
                    contAltoAmargo++;                      
                } 
                contIdNumero = 0
                for(var i = 20;i<30;i++){
                    conexion.query("INSERT INTO lista_umbrales set ?",{
                        nivel:2,
                        idNumero: contIdNumero,
                        tipo:'Amargo',
                        masBajo: numeroAleatorioMandar[contBajoAmargo],
                        masAlto: numeroAleatorioMandar[contAltoAmargo],
                    });
                    contIdNumero++;
                    contBajoAmargo++;
                    contAltoAmargo++;
                } 
                contIdNumero = 0;
                for(var i = 30;i<40;i++){
                    conexion.query("INSERT INTO lista_umbrales set ?",{
                        nivel:3,
                        idNumero: contIdNumero,
                        tipo:'Amargo',
                        masBajo: numeroAleatorioMandar[contBajoAmargo],
                        masAlto: numeroAleatorioMandar[contAltoAmargo],
                    });
                    contIdNumero++;
                    contBajoAmargo++;
                    contAltoAmargo++;
                } 
                contIdNumero = 0;
                for(var i = 40;i<50;i++){
                    conexion.query("INSERT INTO lista_umbrales set ?",{
                        nivel:4,
                        idNumero: contIdNumero,
                        tipo:'Amargo',
                        masBajo: numeroAleatorioMandar[contBajoAmargo],
                        masAlto: numeroAleatorioMandar[contAltoAmargo],
                    });
                    contIdNumero++;
                    contBajoAmargo++;
                    contAltoAmargo++;
                } 
                contIdNumero = 0;
                for(var i = 50;i<60;i++){
                    conexion.query("INSERT INTO lista_umbrales set ?",{
                        nivel:5,
                        idNumero: contIdNumero,
                        tipo:'Amargo',
                        masBajo: numeroAleatorioMandar[contBajoAmargo],
                        masAlto: numeroAleatorioMandar[contAltoAmargo],
                    });
                    contIdNumero++
                    contBajoAmargo++;
                    contAltoAmargo++;
                } 
                contIdNumero = 0;
                for(var i = 60;i<70;i++){
                    conexion.query("INSERT INTO lista_umbrales set ?",{
                        nivel:6,
                        idNumero: contIdNumero,
                        tipo:'Amargo',
                        masBajo: numeroAleatorioMandar[contBajoAmargo],
                        masAlto: numeroAleatorioMandar[contAltoAmargo],
                    });
                    contIdNumero++;
                    contBajoAmargo++;
                    contAltoAmargo++;
                } 
                contIdNumero = 0;
                for(var i = 70;i<80;i++){
                    conexion.query("INSERT INTO lista_umbrales set ?",{
                        nivel:7,
                        idNumero: contIdNumero,
                        tipo:'Amargo',
                        masBajo: numeroAleatorioMandar[contBajoAmargo],
                        masAlto: numeroAleatorioMandar[contAltoAmargo],
                    });
                    contIdNumero++;
                    contBajoAmargo++;
                    contAltoAmargo++;
                } 
                contIdNumero = 0;
                for(var i = 80;i<90;i++){
                    conexion.query("INSERT INTO lista_umbrales set ?",{
                        nivel:8,
                        idNumero: contIdNumero,
                        tipo:'Amargo',
                        masBajo: numeroAleatorioMandar[contBajoAmargo],
                        masAlto: numeroAleatorioMandar[contAltoAmargo],
                    });
                    contIdNumero++;
                    contBajoAmargo++;
                    contAltoAmargo++;
                } 
                contIdNumero = 0;
                for(var i = 90;i<100;i++){
                    conexion.query("INSERT INTO lista_umbrales set ?",{
                        nivel:9,
                        idNumero: contIdNumero,
                        tipo:'Amargo',
                        masBajo: numeroAleatorioMandar[contBajoAmargo],
                        masAlto: numeroAleatorioMandar[contAltoAmargo],
                    });
                    contIdNumero++;
                    contBajoAmargo++;
                    contAltoAmargo++;
                } 
                contIdNumero = 0;
                 //////////////////Graso
                 for(var i = 0;i<10;i++){
                    conexion.query("INSERT INTO lista_umbrales set ?",{
                        nivel:0,
                        idNumero: contIdNumero,
                        tipo:'Graso',
                        masBajo: numeroAleatorioMandar[contBajoGraso],
                        masAlto: numeroAleatorioMandar[contAltoGraso],
                    });
                    contIdNumero++;
                    contBajoGraso++;
                    contAltoGraso++;
                }
                contIdNumero = 0; 
                for(var i = 10;i<20;i++){
                    conexion.query("INSERT INTO lista_umbrales set ?",{
                        nivel:1,
                        idNumero: contIdNumero,
                        tipo:'Graso',
                        masBajo: numeroAleatorioMandar[contBajoGraso],
                        masAlto: numeroAleatorioMandar[contAltoGraso],
                    });
                    contIdNumero++;
                    contBajoGraso++;
                    contAltoGraso++;
                } 
                contIdNumero = 0;
                for(var i = 20;i<30;i++){
                    conexion.query("INSERT INTO lista_umbrales set ?",{
                        nivel:2,
                        idNumero: contIdNumero,
                        tipo:'Graso',
                        masBajo: numeroAleatorioMandar[contBajoGraso],
                        masAlto: numeroAleatorioMandar[contAltoGraso],
                    });
                    contIdNumero++;
                    contBajoGraso++;
                    contAltoGraso++;
                } 
                contIdNumero = 0;
                for(var i = 30;i<40;i++){
                    conexion.query("INSERT INTO lista_umbrales set ?",{
                        nivel:3,
                        idNumero: contIdNumero,
                        tipo:'Graso',
                        masBajo: numeroAleatorioMandar[contBajoGraso],
                        masAlto: numeroAleatorioMandar[contAltoGraso],
                    });
                    contIdNumero++;
                    contBajoGraso++;
                    contAltoGraso++;
                } 
                contIdNumero = 0;
                for(var i = 40;i<50;i++){
                    conexion.query("INSERT INTO lista_umbrales set ?",{
                        nivel:4,
                        idNumero: contIdNumero,
                        tipo:'Graso',
                        masBajo: numeroAleatorioMandar[contBajoGraso],
                        masAlto: numeroAleatorioMandar[contAltoGraso],
                    });
                    contIdNumero++;
                    contBajoGraso++;
                    contAltoGraso++;
                } 
                contIdNumero = 0;
                for(var i = 50;i<60;i++){
                    conexion.query("INSERT INTO lista_umbrales set ?",{
                        nivel:5,
                        idNumero: contIdNumero,
                        tipo:'Graso',
                        masBajo: numeroAleatorioMandar[contBajoGraso],
                        masAlto: numeroAleatorioMandar[contAltoGraso],
                    });
                    contIdNumero++;
                    contBajoGraso++;
                    contAltoGraso++;
                } 
                contIdNumero = 0;
                for(var i = 60;i<70;i++){
                    conexion.query("INSERT INTO lista_umbrales set ?",{
                        nivel:6,
                        idNumero: contIdNumero,
                        tipo:'Graso',
                        masBajo: numeroAleatorioMandar[contBajoGraso],
                        masAlto: numeroAleatorioMandar[contAltoGraso],
                    });
                    contIdNumero++;
                    contBajoGraso++;
                    contAltoGraso++;
                } 
                contIdNumero = 0;
                for(var i = 70;i<80;i++){
                    conexion.query("INSERT INTO lista_umbrales set ?",{
                        nivel:7,
                        idNumero: contIdNumero,
                        tipo:'Graso',
                        masBajo: numeroAleatorioMandar[contBajoGraso],
                        masAlto: numeroAleatorioMandar[contAltoGraso],
                    });
                    contIdNumero++;
                    contBajoGraso++;
                    contAltoGraso++;
                } 
                contIdNumero = 0;
                for(var i = 80;i<90;i++){
                    conexion.query("INSERT INTO lista_umbrales set ?",{
                        nivel:8,
                        idNumero: contIdNumero,
                        tipo:'Graso',
                        masBajo: numeroAleatorioMandar[contBajoGraso],
                        masAlto: numeroAleatorioMandar[contAltoGraso],
                    });
                    contIdNumero++;
                    contBajoGraso++;
                    contAltoGraso++;
                } 
                contIdNumero = 0;
                for(var i = 90;i<100;i++){
                    conexion.query("INSERT INTO lista_umbrales set ?",{
                        nivel:9,
                        idNumero: contIdNumero,
                        tipo:'Graso',
                        masBajo: numeroAleatorioMandar[contBajoGraso],
                        masAlto: numeroAleatorioMandar[contAltoGraso],
                    });
                    contIdNumero++;
                    contBajoGraso++;
                    contAltoGraso++;
                } 
                contIdNumero = 0;
            }else{ //SEGUNDA O MAS VECES
                conexion.query('DELETE FROM lista_umbrales');
                for(var i = 0;i<10;i++){
                    conexion.query("INSERT INTO lista_umbrales set ?",{
                        nivel:0,
                        idNumero: contIdNumero,
                        tipo:'Amargo',
                        masBajo: numeroAleatorioMandar[contBajoAmargo],
                        masAlto: numeroAleatorioMandar[contAltoAmargo],
                    });
                    contIdNumero++;
                    contBajoAmargo++;
                    contAltoAmargo++;
                }
                contIdNumero = 0; 
                for(var i = 10;i<20;i++){
                    conexion.query("INSERT INTO lista_umbrales set ?",{
                        nivel:1,
                        idNumero: contIdNumero,
                        tipo:'Amargo',
                        masBajo: numeroAleatorioMandar[contBajoAmargo],
                        masAlto: numeroAleatorioMandar[contAltoAmargo],
                    });
                    contIdNumero++; 
                    contBajoAmargo++;
                    contAltoAmargo++;                      
                } 
                contIdNumero = 0
                for(var i = 20;i<30;i++){
                    conexion.query("INSERT INTO lista_umbrales set ?",{
                        nivel:2,
                        idNumero: contIdNumero,
                        tipo:'Amargo',
                        masBajo: numeroAleatorioMandar[contBajoAmargo],
                        masAlto: numeroAleatorioMandar[contAltoAmargo],
                    });
                    contIdNumero++;
                    contBajoAmargo++;
                    contAltoAmargo++;
                } 
                contIdNumero = 0;
                for(var i = 30;i<40;i++){
                    conexion.query("INSERT INTO lista_umbrales set ?",{
                        nivel:3,
                        idNumero: contIdNumero,
                        tipo:'Amargo',
                        masBajo: numeroAleatorioMandar[contBajoAmargo],
                        masAlto: numeroAleatorioMandar[contAltoAmargo],
                    });
                    contIdNumero++;
                    contBajoAmargo++;
                    contAltoAmargo++;
                } 
                contIdNumero = 0;
                for(var i = 40;i<50;i++){
                    conexion.query("INSERT INTO lista_umbrales set ?",{
                        nivel:4,
                        idNumero: contIdNumero,
                        tipo:'Amargo',
                        masBajo: numeroAleatorioMandar[contBajoAmargo],
                        masAlto: numeroAleatorioMandar[contAltoAmargo],
                    });
                    contIdNumero++;
                    contBajoAmargo++;
                    contAltoAmargo++;
                } 
                contIdNumero = 0;
                for(var i = 50;i<60;i++){
                    conexion.query("INSERT INTO lista_umbrales set ?",{
                        nivel:5,
                        idNumero: contIdNumero,
                        tipo:'Amargo',
                        masBajo: numeroAleatorioMandar[contBajoAmargo],
                        masAlto: numeroAleatorioMandar[contAltoAmargo],
                    });
                    contIdNumero++
                    contBajoAmargo++;
                    contAltoAmargo++;
                } 
                contIdNumero = 0;
                for(var i = 60;i<70;i++){
                    conexion.query("INSERT INTO lista_umbrales set ?",{
                        nivel:6,
                        idNumero: contIdNumero,
                        tipo:'Amargo',
                        masBajo: numeroAleatorioMandar[contBajoAmargo],
                        masAlto: numeroAleatorioMandar[contAltoAmargo],
                    });
                    contIdNumero++;
                    contBajoAmargo++;
                    contAltoAmargo++;
                } 
                contIdNumero = 0;
                for(var i = 70;i<80;i++){
                    conexion.query("INSERT INTO lista_umbrales set ?",{
                        nivel:7,
                        idNumero: contIdNumero,
                        tipo:'Amargo',
                        masBajo: numeroAleatorioMandar[contBajoAmargo],
                        masAlto: numeroAleatorioMandar[contAltoAmargo],
                    });
                    contIdNumero++;
                    contBajoAmargo++;
                    contAltoAmargo++;
                } 
                contIdNumero = 0;
                for(var i = 80;i<90;i++){
                    conexion.query("INSERT INTO lista_umbrales set ?",{
                        nivel:8,
                        idNumero: contIdNumero,
                        tipo:'Amargo',
                        masBajo: numeroAleatorioMandar[contBajoAmargo],
                        masAlto: numeroAleatorioMandar[contAltoAmargo],
                    });
                    contIdNumero++;
                    contBajoAmargo++;
                    contAltoAmargo++;
                } 
                contIdNumero = 0;
                for(var i = 90;i<100;i++){
                    conexion.query("INSERT INTO lista_umbrales set ?",{
                        nivel:9,
                        idNumero: contIdNumero,
                        tipo:'Amargo',
                        masBajo: numeroAleatorioMandar[contBajoAmargo],
                        masAlto: numeroAleatorioMandar[contAltoAmargo],
                    });
                    contIdNumero++;
                    contBajoAmargo++;
                    contAltoAmargo++;
                } 
                contIdNumero = 0;
                 //////////////////Graso
                 for(var i = 0;i<10;i++){
                    conexion.query("INSERT INTO lista_umbrales set ?",{
                        nivel:0,
                        idNumero: contIdNumero,
                        tipo:'Graso',
                        masBajo: numeroAleatorioMandar[contBajoGraso],
                        masAlto: numeroAleatorioMandar[contAltoGraso],
                    });
                    contIdNumero++;
                    contBajoGraso++;
                    contAltoGraso++;
                }
                contIdNumero = 0; 
                for(var i = 10;i<20;i++){
                    conexion.query("INSERT INTO lista_umbrales set ?",{
                        nivel:1,
                        idNumero: contIdNumero,
                        tipo:'Graso',
                        masBajo: numeroAleatorioMandar[contBajoGraso],
                        masAlto: numeroAleatorioMandar[contAltoGraso],
                    });
                    contIdNumero++;
                    contBajoGraso++;
                    contAltoGraso++;
                } 
                contIdNumero = 0;
                for(var i = 20;i<30;i++){
                    conexion.query("INSERT INTO lista_umbrales set ?",{
                        nivel:2,
                        idNumero: contIdNumero,
                        tipo:'Graso',
                        masBajo: numeroAleatorioMandar[contBajoGraso],
                        masAlto: numeroAleatorioMandar[contAltoGraso],
                    });
                    contIdNumero++;
                    contBajoGraso++;
                    contAltoGraso++;
                } 
                contIdNumero = 0;
                for(var i = 30;i<40;i++){
                    conexion.query("INSERT INTO lista_umbrales set ?",{
                        nivel:3,
                        idNumero: contIdNumero,
                        tipo:'Graso',
                        masBajo: numeroAleatorioMandar[contBajoGraso],
                        masAlto: numeroAleatorioMandar[contAltoGraso],
                    });
                    contIdNumero++;
                    contBajoGraso++;
                    contAltoGraso++;
                } 
                contIdNumero = 0;
                for(var i = 40;i<50;i++){
                    conexion.query("INSERT INTO lista_umbrales set ?",{
                        nivel:4,
                        idNumero: contIdNumero,
                        tipo:'Graso',
                        masBajo: numeroAleatorioMandar[contBajoGraso],
                        masAlto: numeroAleatorioMandar[contAltoGraso],
                    });
                    contIdNumero++;
                    contBajoGraso++;
                    contAltoGraso++;
                } 
                contIdNumero = 0;
                for(var i = 50;i<60;i++){
                    conexion.query("INSERT INTO lista_umbrales set ?",{
                        nivel:5,
                        idNumero: contIdNumero,
                        tipo:'Graso',
                        masBajo: numeroAleatorioMandar[contBajoGraso],
                        masAlto: numeroAleatorioMandar[contAltoGraso],
                    });
                    contIdNumero++;
                    contBajoGraso++;
                    contAltoGraso++;
                } 
                contIdNumero = 0;
                for(var i = 60;i<70;i++){
                    conexion.query("INSERT INTO lista_umbrales set ?",{
                        nivel:6,
                        idNumero: contIdNumero,
                        tipo:'Graso',
                        masBajo: numeroAleatorioMandar[contBajoGraso],
                        masAlto: numeroAleatorioMandar[contAltoGraso],
                    });
                    contIdNumero++;
                    contBajoGraso++;
                    contAltoGraso++;
                } 
                contIdNumero = 0;
                for(var i = 70;i<80;i++){
                    conexion.query("INSERT INTO lista_umbrales set ?",{
                        nivel:7,
                        idNumero: contIdNumero,
                        tipo:'Graso',
                        masBajo: numeroAleatorioMandar[contBajoGraso],
                        masAlto: numeroAleatorioMandar[contAltoGraso],
                    });
                    contIdNumero++;
                    contBajoGraso++;
                    contAltoGraso++;
                } 
                contIdNumero = 0;
                for(var i = 80;i<90;i++){
                    conexion.query("INSERT INTO lista_umbrales set ?",{
                        nivel:8,
                        idNumero: contIdNumero,
                        tipo:'Graso',
                        masBajo: numeroAleatorioMandar[contBajoGraso],
                        masAlto: numeroAleatorioMandar[contAltoGraso],
                    });
                    contIdNumero++;
                    contBajoGraso++;
                    contAltoGraso++;
                } 
                contIdNumero = 0;
                for(var i = 90;i<100;i++){
                    conexion.query("INSERT INTO lista_umbrales set ?",{
                        nivel:9,
                        idNumero: contIdNumero,
                        tipo:'Graso',
                        masBajo: numeroAleatorioMandar[contBajoGraso],
                        masAlto: numeroAleatorioMandar[contAltoGraso],
                    });
                    contIdNumero++;
                    contBajoGraso++;
                    contAltoGraso++;
                } 
                contIdNumero = 0;
            }
        })

    }
}

exports.postGuardarListaUmbrales = (req,res)=>{
    res.render("./registro",{
        pageTitle:'Registro',
    });
}

