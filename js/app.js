angular.module("flashCards", ['ui.router'])
.config(function($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('git',{
          url: '/git',
          templateUrl: '/views/gitTemplate.html',
          controller: 'mainCtrl'
        });



// Jquery to make the hamburger menu slide in and out
        $('#slideout-open-menu-button').on("click", function() {
          if($('.slideout-menu:hidden')) {
            $('.slideout-menu').animate({right:'0'}, 350, function() {});
          }
        })

        $('#slideout-closed-menu-button').on("click", function() {
          if($('.slideout-menu:visible')) {
            $('.slideout-menu').animate({right:'-350px'}, 350, function() {});
          }
        })
});
