angular.module('app.request', [])

.controller('RequestController', function($scope, $window, $sce, request, speech) {
  $scope.data = {};
  $scope.home = 'Hi, I\'m Aleck!';
  $scope.home2 = 'What can I do for you?';
  $scope.readme = 'README';
  $scope.openReadMe = function() {
    $window.open('https://github.com/ryanpsuresh/Ash/blob/master/README.md', '_blank');
  };
  $scope.changeMicStatus = function() {
    if (jQuery('.mic').hasClass('fa fa-microphone fa-3x')) {
      jQuery('.mic').removeClass('fa fa-microphone fa-3x');
      jQuery('.mic').addClass('fa fa-microphone-slash fa-3x');
    }
    else {
      jQuery('.mic').removeClass('fa fa-microphone-slash fa-3x');
      jQuery('.mic').addClass('fa fa-microphone fa-3x');
      record();
    }
  };
  jQuery('#waves').show();
  jQuery('body').addClass('bg');
  record();
  setInterval(record, 8000);

  function record() {
    if (speech.checkRecognition() && jQuery('.mic').hasClass('fa fa-microphone fa-3x')) {
      var recognition = speech.createRecognition();
      speech.speechToText(recognition, $scope.data, function(data) {

        request.sendRequest(data)
          .then(function(APIdata) {
            $window.open(APIdata.data);
          })
          .catch(function (error) {
            console.error('Rendering HTML for APIdata unsuccessful ' + error);
          });

      });
    }
  }

});