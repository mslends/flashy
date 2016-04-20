angular.module("flashCards").directive('flashCardDirective', function() {

return {
  restrict: "E",
  templateUrl: "views/flashCardTmpl.html",
  controller: function($scope, $firebaseObject, $firebaseArray, $stateParams, flashCardService) {

    // Assigned my Firebase location to the mygetFirebaseRef variable
      var mygetFirebaseRef = new Firebase("https://flashington.firebaseio.com/-KFlALUT2_FKchYLeuOL/");


    // Puts my flashcards object on scope
      $scope.flashCards =  $firebaseArray(mygetFirebaseRef.child($stateParams.topicId));

      $scope.deleteCard = function(card, index, params) {
        var params = $stateParams;
        console.log($stateParams);
        console.log('index:', index);

        flashCardService.deleteCard(card, $scope.flashCards);
      }.bind(this)
  },

  scope: {
    topics: '=',
    flashCards: '=',
    toggle: '='
  }
}

});
