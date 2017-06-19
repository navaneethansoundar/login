var app = angular.module("myApp", ["ngRoute",'ConApp','IntApp']);
app.config(function($routeProvider,$locationProvider) {
    $routeProvider
    .when("/aboutme", {
        templateUrl : "/views/about/mot.html"

    })
    
     
     .when("/Home", {
        templateUrl : "/views/home/home.html"

    })
       .when("/qualification", {
        templateUrl : "/views/qualification/quali.html"

    })
        .when("/contactme", {
        templateUrl : "/views/contact/contact.html",
        controller:"myCtrl"

    })
          .when("/hobbies", {
        templateUrl : "/views/hobby/hoby.html"

    })
          .when("/workshop", {
        templateUrl : "/views/workshop/workshop.html"

    })
          .when("/interpersonal", {
        templateUrl : "/views/interpersonal/inter.html",
        controller:"showCtrl"
    })
           .when("/extracurricular", {
        templateUrl : "/views/extracurricular/extra.html"

    })

           .when("/software", {
        templateUrl : "/views/software/software.html"

    })
           .when("/leadership", {
        templateUrl : "/views/leadership/leader.html"

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

