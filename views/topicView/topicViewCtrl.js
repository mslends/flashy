angular.module("flashCards").controller('topicViewCtrl', function($scope, $stateParams, flashCardService, $firebaseObject, $firebaseArray){


// Makes it so that whatever topic I choose from the menu, shows up on scope and the data in that topic is repeated over.
  $scope.currentstate = $stateParams.topicId;


  // $scope.topic = $stateParams.topicId;


// Assigned my Firebase location to the mygetFirebaseRef variable
  var mygetFirebaseRef = new Firebase("https://flashington.firebaseio.com/-KFlALUT2_FKchYLeuOL/");


// Puts my flashcards object on scope
  var obj = $firebaseObject(mygetFirebaseRef);
  $scope.flashCards = obj;
  console.log($scope.flashCards);

  var arr = $firebaseArray(mygetFirebaseRef);
  $scope.topics = arr;



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


// // jQuery below makes it so that when I click on a topic in the menu, the menu disappears and slides back in. Find other jQuery on navDirective.js(the only other place where I use jQuery on the app. I copied this function from there).
    $('.topicLinks').on("click", function() {
      if($('.slideout-menu:visible')) {
        $('.slideout-menu').animate({right:'-350px'}, 350, function() {});
      }
    });


});
