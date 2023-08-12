(function (window){
  var byeSpeaker = {};
  byeSpeaker.speak = function (name) {
  console.log(speakWord + " " + name);
  }  

window.byeSpeaker = byeSpeaker;
})(window);

// DO NOT attach the speakWord variable to the 'helloSpeaker' object.
var speakWord = "Good Bye";

