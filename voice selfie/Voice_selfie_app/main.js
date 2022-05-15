

var SpeechRecognition = window.webkitSpeechRecognition;

var Recognition = new SpeechRecognition() ;

function start()
{
document.getElementById("textbook").innerHTML.innerHTML = "";
Recognition.start();

}


Recognition.onresult = function(event)  {

console.log(event);

var Content = event.result[0] [0].transcript;


document.getElementById("textbox").innerHTML = Content;
console.log(content);

  if(content =="take my selfie")
  {
    console.log("taking selfie ----")
    speak();

  }  
       speak();

}

function speak() {

var synth = window.speechSynthesis;

speak_data = document.getElementById("textbox").ariaValueMax;

var utterThis = new SpeechSynthesisisUtterance(speak_data);

synth.speak(utterThis);
Webcam.attach(camera);

}

Webcam.set({

    width:360,
    height:250,
    image_format : 'png',
    png_quality:90
});
camera = document.getElementById("camera");

functioin take_snapshot()
{
  Web.snap(function)

}
