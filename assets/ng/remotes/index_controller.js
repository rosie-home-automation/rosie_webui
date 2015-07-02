angular.module('rosieApp.remotes')
  .config(['$stateProvider', function($stateProvider) {
    $stateProvider
      .state('app.remotes', {
        url: '/remotes',
        templateUrl: 'ng/remotes/index.tmpl.html',
        controller: 'IndexController as indexCtrl',
        resolve: {
          remoteList: function(RemoteService) {
            return RemoteService.getList()
          }
        }
      })
  }])
  .controller('IndexController', ['$scope', 'remoteList', function($scope, remoteList) {
    $scope.remoteList = remoteList
  }])
