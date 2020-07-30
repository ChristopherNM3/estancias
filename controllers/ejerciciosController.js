//Controladores para llevar a los diferentes ejercicios y preguntas.

exports.getVideo = (req,res) =>{
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
};

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

exports.getMuestra12 = (req,res) =>{
    res.render('./ejercicios/sustancia12',{
        pageTitle:'Prueba',
    })
};

exports.getMuestra13 = (req,res) =>{
    res.render('./ejercicios/sustancia13',{
        pageTitle:'Prueba',
    })
};

exports.getMuestra14 = (req,res) =>{
    res.render('./ejercicios/sustancia14',{
        pageTitle:'Prueba',
    })
};

exports.getMuestra15 = (req,res) =>{
    res.render('./ejercicios/sustancia15',{
        pageTitle:'Prueba',
    })
};

exports.getMuestra16 = (req,res) =>{
    res.render('./ejercicios/sustancia16',{
        pageTitle:'Prueba',
    })
};

exports.getMuestra17 = (req,res) =>{
    res.render('./ejercicios/sustancia17',{
        pageTitle:'Prueba',
    })
};

exports.getMuestra18 = (req,res) =>{
    res.render('./ejercicios/sustancia18',{
        pageTitle:'Prueba',
    })
};