angular.module("flashCards").controller('topicViewCtrl', function($scope, $stateParams, flashCardService, $firebaseObject, $firebaseArray){


// Makes it so that whatever topic I choose from the menu, shows up on scope and the data in that topic is repeated over.
  $scope.currentstate = $stateParams.topicId;


  // $scope.topic = $stateParams.topicId;


// Assigned my Firebase location to the mygetFirebaseRef variable
  var mygetFirebaseRef = new Firebase("https://flashington.firebaseio.com/-KFfkkrNdwYPjejVmzWc/");


// Puts my flashcards object on scope
  var obj = $firebaseObject(mygetFirebaseRef);
  $scope.flashCards = obj;
  console.log($scope.flashCards);


// Function below is ran when a user clicks the "Save Card" button (ng-click) on the addCardForm.html(bottom of page).
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
