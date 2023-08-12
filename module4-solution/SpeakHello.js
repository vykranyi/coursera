
 (function (window){
  var helloSpeaker = {};
  helloSpeaker.speak = function (name) {
    console.log(speakWordHi + " " + name);
  }

  window.helloSpeaker = helloSpeaker;
})(window);

// DO NOT attach the speakWord variable to the 'helloSpeaker' object.
var speakWordHi = "Hello";
//i change name of speakWord in this file, because file SpqakGoodBye.js overwrites the value of "speakWord"