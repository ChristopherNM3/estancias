var slider = document.getElementById('range');
var salida = document.getElementById('demo');
salida.innerHTML = slider.value;

slider.oninput = function(){
    salida.innerHTML = this.value;
}