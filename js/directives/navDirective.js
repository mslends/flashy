angular.module("flashCards").directive('navDirective', function() {


return {
  restrict: "E",
  templateUrl: "views/navTmpl.html",
  controller: 'navCtrl',
  scope: {
    topics: '='
  },
  link : function(scope, elements, attributes){
    console.log("hit");
    console.log(scope.topics);
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
       }

    }

});
