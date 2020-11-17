var arrayInput = new Array(); //Creacion del arreglo para asignarle nombre al video
var inputsValues = document.getElementsByClassName('name');
nameValues = [].map.call(inputsValues,function(dataInput){
    arrayInput.push(dataInput.value);
})
let name = document.getElementsByName("name");
let video = document.querySelector("video");

let sujeto = document.getElementById("sujeto");

function IniciarVideo(){
    navigator.mediaDevices.getUserMedia({audio:false, video:true})
    .then(record)
    .catch(err => console.log("err"));
};

let chunks = [];

function record(stream){
    video.srcObject = stream;

    let mediaRecorder = new MediaRecorder(stream,{
        mimetype:'video/mp4;condecs=h264'
    });

    mediaRecorder.start();
    mediaRecorder.ondataavailable = function(e){
        //console.log(e.data);
        chunks.push(e.data);
    }

    mediaRecorder.onstop = function(){
        //alert(arrayNameVideo[0]);
        alert('Finalizo la grabacion');
        let blod = new Blob(chunks,{type:"video/mp4"});
        chunks = [];
        download(blod);
    }

    document.querySelector('#boton').addEventListener('click',function(ev){
        mediaRecorder.stop();
        mediaRecorder.start();
    })
}



function download(blod){
    let muestra = document.getElementById("muestra");
    var videoName = sujeto.value + ", " + muestra.value;
    var link = document.createElement("a");
    link.href = window.URL.createObjectURL(blod);
    link.setAttribute("download",videoName);
    link.style.display = "none";
    

    document.body.appendChild(link);

    link.click();
    link.remove();
    arrayInput = [];
}

window.onload = video();


