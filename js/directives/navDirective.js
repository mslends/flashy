angular.module("flashCards").directive('navDirective', function() {


return {
  restrict: "AE",
  templateUrl: "views/navTmpl.html",
  controller: 'navCtrl',
  scope: {
    topics: '=',
    toggle: '='
  },
  link : function(scope, elements, attributes){
    console.log("jquery menu functionality working!");

    // jQuery below makes it so that when I click on a topic in the menu, the menu disappears and slides back in. Find other jQuery on navDirective.js(the only other place where I use jQuery on the app. I copied this function from there).
        // $('.slideout-menu').on("click", function() {
        //   if($('.slideout-menu:visible')) {
        //     $('.slideout-menu').animate({right:'-350px'}, 350, function() {});
        //   }
        // });

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
