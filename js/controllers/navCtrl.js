angular.module("flashCards").controller('navCtrl', function($scope, topicService, flashCardService, $stateParams, $firebaseObject, $firebaseArray, $firebaseAuth) {

// function below gets topics from my getTopics function on topicService.js(bottom of page)
$scope.topics = topicService.getTopics();
console.log($scope.topics);


});
