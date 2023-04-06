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
document.getElementById("capturedimage").innerHTML = "<img id='pic_pic' src='"+data_uri+"'>";
});
}
console.log("Ml5 Version" + ml5.version);
var classifier = ml5.imageClassifier("https:teachablemachine.withgoogle.com/models/rdbHjYcld/model.json", modelLoaded)
function modelLoaded(){
console.log("Ml5.js and Machine Learning Model has been imported, loaded and is now onlin")
}
function identifyCorrelatingEmoji(){
savedImg = document.getElementById("pic_pic");
classifier.classify(savedImg, gotResult)
}
function gotResult(error, results) { 
if (error) { 
console.error(error); 
} 
else { 
console.log(results);
gesture = results[0].label; 
speakscript = ""; 
if(gesture == "Peace") { 
speakscript = "You want world peace";
document.getElementById("actualemoji").innerHTML = "You want world peace|&#9996;";
} 
else if(gesture == "Thumbs Up") { 
speakscript = "I like it";
document.getElementById("actualemoji").innerHTML = "I like it|&#128077;"; 
} 
else if(gesture == "Thumbs Down") { 
speakscript = "I don't like it";
document.getElementById("actualemoji").innerHTML = "I don't like it|&#128078;";
}
else if(gesture == "Fist Bump") { 
speakscript = "That is great!";
document.getElementById("actualemoji").innerHTML = "That is great!|&#9994;";
} 
else if(gesture == "Connection") { 
speakscript = "Can't get proper signal";
document.getElementById("actualemoji").innerHTML = "Can't get proper signal|&#129304;";
}  
speak();
}} 
function speak(){ 
var synth = window.speechSynthesis;
speak_data = speakscript;
var utterThis = new SpeechSynthesisUtterance(speak_data); 
synth.speak(utterThis);
}