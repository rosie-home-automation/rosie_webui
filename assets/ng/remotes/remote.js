angular.module('rosieApp.remotes')
  .factory('Remote', ['DS', function(DS) {
    return DS.defineResource('remotes')
  }])
