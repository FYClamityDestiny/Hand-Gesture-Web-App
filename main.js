Webcam.set({
width:500
,height:350
,image_format:'png',
png_quality:1000000000
});
var camera = document.getElementById("webcamview");
Webcam.attach(camera);
function takePic(){
Webcam.snap(function(data_uri){
document.getElementById("capturedimage").innerHTML = "<img id='pic_pic' src='"+data_uri+"'>"
});
}
console.log("Ml5 Version" + ml5.version);
var classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/rdbHjYcld/model.json", modelLoaded)
function modelLoaded(){
console.log("Ml5.js and Machine Learning Model has been imported, loaded and is now onlin")
}