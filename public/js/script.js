const video = document.getElementById('video')

Promise.all([
  faceapi.nets.tinyFaceDetector.loadFromUri('../models'),
  faceapi.nets.faceLandmark68Net.loadFromUri('../models'),
  faceapi.nets.faceRecognitionNet.loadFromUri('../models'),
  faceapi.nets.faceExpressionNet.loadFromUri('../models')
]).then(startVideo)

function startVideo() {
  navigator.getUserMedia(
    { video: {} },
    stream => video.srcObject = stream,
    err => console.error(err)
  )
}

video.addEventListener('playing', () => {
  const canvas = faceapi.createCanvasFromMedia(video)
  document.body.append(canvas)
  const displaySize = { width: video.width, height: video.height }
  faceapi.matchDimensions(canvas, displaySize)
  setInterval(async () => {
    const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions()
    const resizedDetections = faceapi.resizeResults(detections, displaySize)
    canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
    faceapi.draw.drawDetections(canvas, resizedDetections)
    faceapi.draw.drawFaceLandmarks(canvas, resizedDetections)
    //faceapi.draw.drawFaceExpressions(canvas, resizedDetections)
    
  try {
    if(resizedDetections[0].expressions)
    {
      let arr = ["neutral","happy","sad","angry","fearful","disgusted","surprised"];
      let expresion = arr[0];
      for(let i=1; i<7; i++){
        if(resizedDetections[0].expressions[arr[i]] > resizedDetections[0].expressions[expresion])
        {
          expresion = arr[i];
        }
      }
      expresion = (expresion == "happy" || expresion == "surprised")? "le gusto un " + (resizedDetections[0].expressions[expresion]*100).toFixed() + "%": expresion;
      expresion = (expresion == "disgusted" || expresion == "angry" || expresion == "sad" || expresion == "fearful")? "no le gusto un " + (resizedDetections[0].expressions[expresion]*100).toFixed() + "%": expresion;
      console.log(expresion);
    }  
  } catch {}

  }, 100)
})

startVideo()
