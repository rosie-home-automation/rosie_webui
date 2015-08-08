angular.module('rosieApp.lights')
  .config(['$stateProvider', 'LightServiceProvider', function($stateProvider, lightServiceProvider) {
    $stateProvider
      .state('app.lights', {
        url: '/lights',
        templateUrl: 'ng/lights/index.tmpl.html',
        controller: 'LightsController as lightsCtrl',
        resolve: {
          lights: function(LightService) {
            return LightService.findAll()
          }
        }
      })
  }])
  .controller('LightsController', ['$scope', 'LightService',
    function($scope, LightService) {
      LightService.bindAll({}, $scope, 'lights')
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
