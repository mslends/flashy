angular.module("flashCards").directive('flashCardDirective', function() {

return {
  restrict: "E",
  templateUrl: "views/flashCardTmpl.html",
  controller: 'mainCtrl',
  scope: {
    topics: '=',
    flashCards: '='
  }
}

});
