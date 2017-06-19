var app = angular.module("myApp", ["ngRoute",'ConApp','IntApp']);
app.config(function($routeProvider,$locationProvider) {
    $routeProvider
    .when("/aboutme", {
        templateUrl : "login/views/about/mot.html"

    })
    
     
     .when("/Home", {
        templateUrl : "login/views/home/home.html"

    })
       .when("/qualification", {
        templateUrl : "login/views/qualification/quali.html"

    })
        .when("/contactme", {
        templateUrl : "login/views/contact/contact.html",
        controller:"myCtrl"

    })
          .when("/hobbies", {
        templateUrl : "login/views/hobby/hoby.html"

    })
          .when("/workshop", {
        templateUrl : "login/views/workshop/workshop.html"

    })
          .when("/interpersonal", {
        templateUrl : "login/views/interpersonal/inter.html",
        controller:"showCtrl"
    })
           .when("/extracurricular", {
        templateUrl : "login/views/extracurricular/extra.html"

    })

           .when("/software", {
        templateUrl : "login/views/software/software.html"

    })
           .when("/leadership", {
        templateUrl : "login/views/leadership/leader.html"

    })
      $locationProvider.html5Mode(true);
});
      
     app.controller('nav', function($scope, $http) {
     $http.get("./nav.json")
     .then(function (response) {
      $scope.navbar = response.data.navmenu;
       $scope.drop1 = response.data.navdrop1;
        $scope.drop = response.data.navdrop;
  });

        
    });  

