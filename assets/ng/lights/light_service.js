angular.module('rosieApp.lights')
  .factory('LightService', ['DS', function(DS) {
    return DS.defineResource('zwave')
  }])
