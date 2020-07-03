function enlaceAleatorio() {
    var direccionPagina = [];
    
    direccionPagina [0] = '/video';
    direccionPagina [1] = '/texto';
    direccionPagina [2] = '/audio';
    direccionPagina [3] = '/texto';
    direccionPagina [4] = '/fisico';
    direccionPagina [5] = '/imagenes';
    direccionPagina [6] = '/sustancia1';
    
    X = Math.round(Math.random()*direccionPagina.length);
    window.location=direccionPagina[X];
    //console.log(X);
}

