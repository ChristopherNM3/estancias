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

exports.getComida1 = (req,res) =>{
    res.render('./ejercicios/sustancia1',{
        pageTitle:'Prueba',
    });
}

exports.getSustancia2 = (req,res) =>{
    res.render('./ejercicios/sustancia2',{
        pageTitle:'Prueba',
    });
}

exports.getSustancia3 = (req,res) =>{
    res.render('./ejercicios/sustancia3',{
        pageTitle:'Prueba',
    })
}