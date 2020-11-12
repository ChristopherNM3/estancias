var cont = 0;
function cambiarImagenes(){
    let circulo=document.getElementById('C' + cont);
    circulo.innerHTML = `<circle cx="6" cy="6" r="5" fill="#5DBCD2"/>`;
    cont++;
    circulo=document.getElementById('C' + cont);
    muestra.value = cont + " - Preferencias";
    circulo.innerHTML = `<circle cx="6" cy="6" r="5" fill="#1D82F7"/>`;
    let id=document.getElementById('ID' + cont);
    let div=document.getElementById("div");
    let boton=document.getElementById('boton');

    var valores = id.value.split(' ');

    boton.innerHTML = `<button type="button" class="btn btn-primary efecto" style="font-size: 1.5rem; width: 100%" disabled>Siguiente</button>`;
    div.innerHTML = `
    <div class="efecto" style="width: min-content;" onclick="escogerImagen('img1', 'img2', ${cont})">
        <img id="img1" src="./imagenes/muestra.png">
        <p class="texto center">${valores[0]}</p>
    </div>
    <div class="efecto" style="width: min-content;" onclick="escogerImagen('img2', 'img1', ${cont})">
        <img id="img2" src="./imagenes/muestra.png">
        <p class="texto center">${valores[1]}</p>
    </div>`;
}

var imagen = 'img1'
function escogerImagen(a, b, c){
    let id=document.getElementById('ID' + c);
    let img1=document.getElementById(a);
    let img2=document.getElementById(b);
    let boton=document.getElementById('boton');
    let muestra=document.getElementById('muestra');
    muestra.value = (cont+1) + " - Preferencias";

    boton.innerHTML = `<button type="button" class="btn btn-primary efecto" style="font-size: 1.5rem; width: 100%" onclick="cambiarImagenes()">Siguiente</button>`;
    if(cont==3) 
    boton.innerHTML = `<button type="submit" class="btn btn-primary efecto" style="font-size: 1.5rem; width: 100%">Siguiente</button>`;

    img1.style = `box-shadow: 0 0 4px 4px rgb(6, 130, 247);`;
    img2.style = ``;
    if(a!=imagen){
        var orden = id.value.split(' ');
        id.value = `${orden[1]} ${orden[0]} ${orden[2]}`;
        imagen = a;
    }
}

function seleccionar(opcion, a, b){
    var respuesta = document.getElementById('respuesta');
    var boton = document.getElementById('boton');
    let img1=document.getElementById(a);
    let img2=document.getElementById(b);
    img1.style = `box-shadow: 0 0 4px 4px rgb(6, 130, 247);`;
    img2.style = ``;

    opcion = (opcion=='0')? true : false;
    respuesta.value = opcion;
    boton.innerHTML = `<button type="submit" class="btn btn-primary efecto" style="font-size: 1.5rem; width: 100%">Siguiente</button>`;
}