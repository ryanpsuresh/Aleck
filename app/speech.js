angular.module('app.speech', [])

.factory('speech', function() {

  return {
    checkRecognition: checkRecognition,
    createRecognition: createRecognition,
    speechToText: speechToText
  };

  function checkRecognition() {
    if (!('webkitSpeechRecognition' in window)) { // If browser doesn't support WebSpeech API
      console.log('Web Speech API not supported on this browser');
      return false;
    }
    return true;
  }

}