angular.module('rosieApp.garage')
  .config(['$stateProvider', function($stateProvider) {
    $stateProvider
      .state('app.garage.opener', {
        url: '/opener',
        views: {
          '': {
            templateUrl: 'ng/garage/opener.tmpl.html',
            controller: 'GarageOpenerController as garageOpenerCtrl'
          },
          'breadcrumb': {
            template: 'Opener'
          }
        }
      })
  }])
  .controller('GarageOpenerController', ['$scope', 'Door', function($scope, Door) {
    $scope.updateStatus = function() {
      Door.status().then(function(status) {
        $scope.status = status
      })
    }
    $scope.updateStatus()
    $scope.toggleDoor = function() {
      Door.toggle()
    }
  }])
