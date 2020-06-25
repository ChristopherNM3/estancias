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