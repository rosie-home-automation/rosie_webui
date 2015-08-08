angular.module('rosieApp.remotes')
  .factory('RemoteService', ['DS', function(DS) {
    return DS.defineResource('remotes')
  }])
