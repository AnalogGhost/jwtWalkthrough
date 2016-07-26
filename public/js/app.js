var app = angular.module('jwt',[]);

app.config(function ($httpProvider) {
  $httpProvider.interceptors.push('jwtInterceptor');
})
.service('jwtInterceptor', function jwtInterceptor(){
  return {
    // always make sure to return anything you use here!
    request: function(config){
      if (localStorage.jwt) {
        config.headers.Authorization = 'Bearer ' + localStorage.jwt;
      }
      return config;
    }
  };
})

app.controller('jwtController',['$scope','$http', function($scope,$http) {

  $scope.view = {};

  $scope.anythingMan = function() {
    $http.get('/login').then(function (res) {
      localStorage.jwt = res.data.token;
    });
  };

  $scope.useApi = function () {
    $http.get('/api').then(function (res) {
      $scope.view.response = res.data;
    });
  }

  $scope.beerMe = function () {
    $http.get('/ipa').then(function (res) {
      $scope.view.response = res.data;
    });
  }
}]);
