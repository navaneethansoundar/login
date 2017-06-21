
angular.module('ConApp',[])
.controller('myCtrl',function($scope,$window){
        $scope.myFun=function(){
        alert("Thanks for ur feedback")  
        }
          $window.location.href("http://localhost/resume.html");
      });
