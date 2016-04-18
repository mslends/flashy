angular.module("flashCards").controller('topicViewCtrl', function($scope, $stateParams, flashCardService, $firebaseObject, $firebaseArray){

  $scope.currentstate = $stateParams.topicId;

  $scope.topic = $stateParams.topicId;

  var mygetFirebaseRef = new Firebase("https://flashington.firebaseio.com/-KFfkkrNdwYPjejVmzWc/");

  var obj = $firebaseObject(mygetFirebaseRef);
  $scope.flashCards = obj;
  console.log($scope.flashCards);


$scope.newCard = function() {
  flashCardService.addNewCard(
    {
      question: $scope.question,
      answer: $scope.answer,
      topic: $scope.topic
    }
  );
  // $scope.flashCards = flashCardService.getFlashCards($scope.topic);
}

});
