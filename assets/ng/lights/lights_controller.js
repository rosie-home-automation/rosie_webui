angular.module('rosieApp.lights')
  .config(['$stateProvider', 'LightServiceProvider', function($stateProvider, lightServiceProvider) {
    $stateProvider
      .state('app.lights', {
        url: '/lights',
        templateUrl: 'ng/lights/index.tmpl.html',
        controller: 'LightsController as lightsCtrl',
        resolve: {
          lights: function(LightService) {
            return LightService.getList()
          }
        }
      })
  }])
  .controller('LightsController', ['$scope', 'lights', function($scope, lights) {
    $scope.lights = lights
  }])
  .directive('lightRow', function() {
    return {
      scope: {
        light: '='
      },
      restrict: 'A',
      templateUrl: 'ng/lights/_light_row.tmpl.html'
    }
  })
