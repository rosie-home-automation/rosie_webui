angular.module('rosieApp.remotes')
  .controller('RemoteController', ['$scope', 'Remote', function($scope, Remote) {
    $scope.remote = {
      name: null
    }
    $scope.sendCmd = function(command) {
      Remote.update($scope.remote.name, {command: command}, {cacheResponse: false})
    }
  }])
  .controller('RemoteReceiverController', ['$scope', function($scope) {
    $scope.remote.name = 'receiver'
  }])
  .controller('RemoteTvController', ['$scope', function($scope) {
    $scope.remote.name = 'tv'
  }])
  .controller('RemotePs3Controller', ['$scope', function($scope) {
    $scope.remote.name = 'ps3'
  }])
