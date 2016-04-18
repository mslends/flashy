angular.module("flashCards").controller('mainCtrl', function($scope, topicService, flashCardService, $stateParams) {

// function below gets topics from my getTopics function on topicService.js(bottom of page)
$scope.topics = topicService.getTopics();
console.log($scope.topics);



$('.topicLinks').on("click", function() {
  if($('.slideout-menu:visible')) {
    $('.slideout-menu').animate({right:'-350px'}, 350, function() {});
  }
});

});
