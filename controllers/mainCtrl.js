angular.module("flashCards").controller('mainCtrl', function($scope, topicService) {


$scope.topics = topicService.getTopics();
$scope.test = "Hey bitches!!!";


});
