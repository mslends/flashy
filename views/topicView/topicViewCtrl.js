angular.module("flashCards").controller('topicViewCtrl', function($scope, $stateParams, flashCardService){
  $scope.topic = $stateParams.topicId;
  $scope.flashCards = flashCardService.getFlashCards($scope.topic);

});
