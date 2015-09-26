angular.module('rosieApp.lights')
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
