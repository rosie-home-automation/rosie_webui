angular.module('rosieApp.remotes')
  .config(['$stateProvider', function($stateProvider) {
    $stateProvider
      .state('app.remotes', {
        url: '/remotes',
        templateUrl: 'ng/remotes/index.tmpl.html',
        controller: 'RemotesIndexController as remotesIndexCtrl',
        resolve: {
          remoteList: function(Remote) {
            return Remote.findAll()
          }
        }
      })
  }])
  .controller('RemotesIndexController', ['$scope', 'remoteList', function($scope, remoteList) {
    $scope.remoteList = remoteList
  }])
