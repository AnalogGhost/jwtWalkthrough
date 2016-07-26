var app = angular.module('jwt',[]);

app.controller('jwtController',['$scope', function($scope) {
  $scope.view = {
    greeting: "I'm Batman"
  }
}]);
