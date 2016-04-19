angular.module("flashCards").directive('navDirective', function() {


return {
  restrict: "E",
  templateUrl: "views/navTmpl.html",
  controller: 'navCtrl',
  scope: {
    topics: '=',
    toggle: '='
  },
  link : function(scope, elements, attributes){
    console.log("jquery menu functionality working!");

        // Jquery to make the hamburger menu slide out(to open)
            $('#slideout-open-menu-button').on("click", function() {
            if($('.slideout-menu:hidden')) {
            $('.slideout-menu').animate({right:'0'}, 350, function() {});
          }
        });
        // Jquery to make the hamburger menu slide in(to close)
            $('#slideout-closed-menu-button').on("click", function() {
            if($('.slideout-menu:visible')) {
            $('.slideout-menu').animate({right:'-350px'}, 350, function() {});
          }
        });
      }
    }
});
