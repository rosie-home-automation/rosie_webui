angular.module('rosieApp.garage')
  .config(['$stateProvider', function($stateProvider) {
    $stateProvider
      .state('app.garage.logs', {
        url: '/logs',
        views: {
          '': {
            templateUrl: 'ng/garage/logs.tmpl.html',
            controller: 'GarageLogsController as garageLogsCtrl',
            resolve: {
              logList: ['Log', 'User', function(Log, User) {
                return Log.findAll()
                  .then(function(logList) {
                    _.each(logList, function(log) {
                      User.find(log.userId)
                    })
                  })
              }]
            }
          },
          'breadcrumb': {
            template: 'Logs'
          }
        }
      })
  }])
  .controller('GarageLogsController', [
    '$scope', '$modal', 'Log', 'logList',
    function($scope, $modal, Log, logList) {
      Log.bindAll({}, $scope, 'logList')
      $scope.logDetailStatus = {}
      $scope.toggleDetails = function(log) {
        $scope.logDetailStatus[log.id] = !$scope.logDetailStatus[log.id]
        console.log("DS", log.id, $scope.logDetailStatus[log.id])
      }
    }
  ])
