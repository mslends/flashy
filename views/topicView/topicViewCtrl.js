angular.module("flashCards").controller('topicViewCtrl', function($scope, $stateParams, flashCardService){
  $scope.topic = $stateParams.topicId;
  $scope.flashCards = flashCardService.getFlashCards($scope.topic);
console.log("hey");
$scope.newCard = function() {
  flashCardService.addNewCard(
  {
    question: $scope.question,
    answer: $scope.answer,
    topic: $scope.topic
  });
  $scope.flashCards = flashCardService.getFlashCards($scope.topic);
}

});
