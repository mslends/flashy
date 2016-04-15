angular.module("flashCards").controller('navCtrl', function($scope, topicService, flashCardService, $stateParams, $rootScope) {


$scope.topics = topicService.getTopics();
console.log($scope.topics);


});
