angular.module("flashCards").controller('mainCtrl', function($scope, topicService, flashCardService, $stateParams) {


$scope.topics = topicService.getTopics();
console.log($scope.topics);



});
