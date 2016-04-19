angular.module("flashCards", ['ui.router', 'firebase'])
.constant('firebaseUrl', 'https://flashington.firebaseio.com/')
.config(function($urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('home',{
          url: '/',
          templateUrl: 'views/homeTmpl.html'
        })
        .state('topic',{
          url: '/topic/:topicId',
          templateUrl: 'views/topicView/topicTmpl.html',
          controller:'topicViewCtrl'
        })
        .state('addCardForm',{
          url: '/addCardForm',
          templateUrl: 'views/topicView/addCardForm.html',
          controller: 'topicViewCtrl'
        })

});
