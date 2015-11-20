angular.module('rosieApp.remotes')
  .config(['$stateProvider', function($stateProvider) {
    $stateProvider
      .state('app.remote', {
        abstract: true,
        url: '/remotes',
        templateUrl: 'ng/remotes/remote.tmpl.html',
        controller: 'RemoteController as remoteCtrl'
      })
      .state('app.remote.receiver', {
        url: '/receiver',
        views: {
          '': {
            templateUrl: 'ng/remotes/remote_receiver.tmpl.html',
            controller: 'RemoteReceiverController as remoteReceiverCtrl'
          },
          'breadcrumb': {
            template: 'Receiver'
          }
        }
      })
      .state('app.remote.tv', {
        url: '/tv',
        views: {
          '': {
            templateUrl: 'ng/remotes/remote_tv.tmpl.html',
            controller: 'RemoteTvController as remoteTvCtrl'
          },
          'breadcrumb': {
            template: 'TV'
          }
        }
      })
      .state('app.remote.ps3', {
        url: '/ps3',
        views: {
          '': {
            templateUrl: 'ng/remotes/remote_ps3.tmpl.html',
            controller: 'RemotePs3Controller as remotePs3Ctrl'
          },
          'breadcrumb': {
            template: 'PS3'
          }
        }
      })
  }])
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
