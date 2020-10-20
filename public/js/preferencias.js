var cont = 0;
var obj = [{0: 0}, {1: 0}, {2: 0}, {3: 0}];
function cambiarImagenes(a, b, c){
    let id=document.getElementById('ID' + c);
    let div1=document.getElementById("div1");
    let div2=document.getElementById("div2");
    div1.innerHTML = `<img id="img1" src="./imagenes/comida/${a}.jpg" class="efecto" onclick="siguienteImagen('${a}', '${b}', 'img1', 'img2', '${c}')" style="">`;
    div2.innerHTML = `<img id="img2" src="./imagenes/comida/${b}.jpg" class="efecto" onclick="siguienteImagen('${b}', '${a}', 'img2', 'img1', '${c}')" style="">`;
    if(id.value!=""){
        let img=document.getElementById(obj[c]);
        img.style = `border: rgb(6, 130, 247) 3px solid;`;
    }
}
function siguienteImagen(a, b, c, d, e){
    let id=document.getElementById('ID' + e);
    let img1=document.getElementById(c);
    let img2=document.getElementById(d);
    img1.style = `border: rgb(6, 130, 247) 3px solid;`;
    img2.style = ``;
    if(id.value==""){
        cont++;
    }
    obj[e] = c;
    id.value = `${a} ${b}`;
    if(cont==4){
        let boton=document.getElementById('boton');
        boton.innerHTML = `<button type="submit" class="btn btn-primary efecto" style="font-size: 1.5rem;">Siguiente</button>`;
    }
}