// SAMPLE AUDIO BANK #1
//Ah-Ha
function aha(){
  var snd = new Audio('https://www.dropbox.com/s/atbwxbpryfcttpk/ah-ha.mp3?dl=1') //audio link
  snd.play()//plays the sound
}

//Dan
function dan(){
var snd = new Audio('https://www.dropbox.com/s/1dbnppznxwr15ih/dan.mp3?dl=1')
snd.play()
}

//Bang of the Net
function botn(){
var snd = new Audio('https://www.dropbox.com/s/p0un23b0k5az2a5/back-of-the-net.mp3?dl=1')
snd.play()
}

//Bang Out of Order
function booo(){
var snd = new Audio('https://www.dropbox.com/s/uu2jk82q6nsg3ju/bangoutoforder.mp3?dl=1')
snd.play()
}

//Email of the Evening
function jurassic(){
var snd = new Audio('https://www.dropbox.com/s/drutwih3vjpyh15/emailoftheevening.mp3?dl=1')
snd.play()
}

//I Ate a Scotch Egg
function smc(){
var snd = new Audio('https://www.dropbox.com/s/gyhtodtxlf23czc/iateascotchegg.mp3?dl=1')
snd.play()
}

//Goal
function goal(){
var snd = new Audio('')
snd.play()
}

//I'm Confused
function kiss(){
var snd = new Audio('https://www.dropbox.com/s/0xb9kwytzla9e97/imconfused.mp3?dl=1')
snd.play()
}

//Hello Partridge
function hp(){
var snd = new Audio('https://www.dropbox.com/s/4v8d64mw8id5fog/hellopartridge.mp3?dl=1')
snd.play()
}

//SAMPLE AUDIO BANK #2
//Cash Register
function CR(){
  var snd = new Audio('https://www.dropbox.com/s/3ootiaegk53aikl/cash-register.mp3?dl=1')
  snd.play()
}

//Ding
function ding(){
  var snd = new Audio('https://www.dropbox.com/s/8kq0yxxtmb1o9rb/ding.mp3?dl=1')
  snd.play()
}

//Fail
function fail(){
  var snd = new Audio('https://www.dropbox.com/s/84jw8h3z6gbt9u6/fail.mp3?dl=1')
  snd.play()
}

//Game Achievement
function GA(){
  var snd = new Audio('https://www.dropbox.com/s/krlqjg4y8q3fy7k/game.mp3?dl=1')
  snd.play()
}

//Heart Beat
function HB(){
  var snd = new Audio('https://www.dropbox.com/s/vi80gpe0hhu75yr/heart-beat.mp3?dl=1')
  snd.play()
}

//Owl
function owl(){
  var snd = new Audio('https://www.dropbox.com/s/kis88pzzrib1g9l/Owl.mp3?dl=1')
  snd.play()
}

//Punch
function punch(){
  var snd = new Audio('https://www.dropbox.com/s/pi0kdqv12feo2im/punch.mp3?dl=1')
  snd.play()
}

//Sparkles
function sparkles(){
  var snd = new Audio('https://www.dropbox.com/s/zxs598gmhp4l1n4/sparkles.mp3?dl=1')
  snd.play()
}

//Suspense
function suspense(){
  var snd = new Audio('https://www.dropbox.com/s/r4l743ecqbbjx66/suspense.mp3?dl=1')
  snd.play()
}

//TEXT-TO-SPEECH FEATURE
function TextToAudio() {
  let msg = document.getElementById("text-to-speech").value;
  let speech = new SpeechSynthesisUtterance();
  speech.lang = "en-US";
  speech.text = msg;
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;
  window.speechSynthesis.speak(speech);
}