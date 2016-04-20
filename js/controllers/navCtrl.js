angular.module("flashCards").controller('navCtrl', function($scope, topicService, flashCardService, $stateParams, $firebaseObject, $firebaseArray, $firebaseAuth) {

// function below gets topics from my getTopics function on topicService.js(bottom of page). It then puts those topics on scope in my popout menu (see menu by clicking on the hamburger menu)
// $scope.topics = topicService.getTopics();
// console.log($scope.topics);
// console.log("get topics hit!");


var mygetFirebaseRef = new Firebase("https://flashington.firebaseio.com/-KFlALUT2_FKchYLeuOL/");
var obj = $firebaseArray(mygetFirebaseRef);
$scope.stuffynames = obj;

// After the "Save" button is clicked, this function pushes whatever was put into the text field into my array. It is tied to topicService.js
$scope.newTopic = function(newMenuTopic) {
  console.log("newTopic Function hit!");
  var something = {
    name: newMenuTopic,
    state: newMenuTopic
  };
  flashCardService.addNewTopic(something);

  var obj = {topic:[]};
  flashCardService.addNewTopic(obj);
  // $scope.flashCards = flashCardService.getFlashCards($scope.topic);


  $scope.deleteTopic = function(topic) {
    console.log("delete topic function hit!");
    flashCardService.deleteTopic(topic);
  }
}
});
