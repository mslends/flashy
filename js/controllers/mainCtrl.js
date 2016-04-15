angular.module("flashCards").controller('mainCtrl', function($scope, topicService, flashCardService, $stateParams, $rootScope) {


$scope.topics = topicService.getTopics();
console.log($scope.topics);


});
