angular.module('rosieApp')
  .controller('LightsController', ['$scope', 'Restangular', function($scope, Restangular) {
    Restangular.all('zwave').getList().then(function(lights) {
      $scope.lights = lights
    })
  }])
