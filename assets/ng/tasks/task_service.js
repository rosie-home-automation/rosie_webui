angular.module('rosieApp.tasks')
  .factory('Task', ['DS', function(DS) {
    return DS.defineResource('queue')
  }])
