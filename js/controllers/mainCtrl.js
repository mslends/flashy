angular.module("flashCards").controller('mainCtrl', function($scope, topicService, flashCardService, $stateParams) {

// function below gets topics from my getTopics function on topicService.js(bottom of page)
$scope.topics = topicService.getTopics();
console.log($scope.topics);


// jQuery below makes it so that when I click on a topic in the menu, the menu disappears and slides back in. Find other jQuery on navDirective.js(the only other place where I use jQuery on the app. I copied this function from there).
    $('.topicLinks').on("click", function() {
      if($('.slideout-menu:visible')) {
        $('.slideout-menu').animate({right:'-350px'}, 350, function() {});
      }
    });
});
