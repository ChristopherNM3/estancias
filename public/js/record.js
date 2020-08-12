let video = document.querySelector("video");

function IniciarVideo(){
    navigator.mediaDevices.getUserMedia({audio:true, video:true})
    .then(record)
    .catch(err => console.log(err));
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
        alert('Finalizo la grabacion');
        let blod = new Blob(chunks,{type:"video/mp4"});
        chunks = [];
        download(blod);
        

    }
    document.querySelector('#boton').addEventListener('click',function(ev){
        mediaRecorder.stop();
    })
}

let name = [];
name = ['01,1']

function download(blod){
    var link = document.createElement("a");
    link.href = window.URL.createObjectURL(blod);
    link.setAttribute("download",name[0]);
    link.style.display = "none";

    document.body.appendChild(link);

    link.click();
    link.remove();
}

window.onload = video();

