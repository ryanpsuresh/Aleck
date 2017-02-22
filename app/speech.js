angular.module('app.speech', [])

.factory('speech', function() {

  return {
    checkRecognition: checkRecognition,
    createRecognition: createRecognition,
    speechToText: speechToText
  };

  function checkRecognition() {
    if (!('webkitSpeechRecognition' in window)) { // If browser doesn't support WebSpeech API
      alert('Web Speech API is not supported on this browser - sorry!');
      return false;
    }
    return true;
  }

  function createRecognition() {
    var recognition = new webkitSpeechRecognition();
    recognition.start();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = "en-US";
    recognition.maxAlternatives = 1;
    return recognition;
  }

  function speechToText(recognition, data, callback) {
    data.text = '';
    recognition.onresult = function (event) {
      for (var i = event.resultIndex; i < event.results.length; ++i) {
        data.text += event.results[i][0].transcript;
      }
      recognition.stop();
      callback(data);
    };
  }

});