angular.module("flashCards").controller('navCtrl', function($scope, topicService, flashCardService, $stateParams, $firebaseObject, $firebaseArray, $firebaseAuth) {

// function below gets topics from my getTopics function on topicService.js(bottom of page). It then puts those topics on scope in my popout menu (see menu by clicking on the hamburger menu)
$scope.topics = topicService.getTopics();
console.log($scope.topics);


});
