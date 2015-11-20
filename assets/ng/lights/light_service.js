angular.module('rosieApp.lights')
  .factory('LightService', ['DS', 'CONTROLLER_API_URL', function(DS, CONTROLLER_API_URL) {
    return DS.defineResource({
      name: 'zwave',
      basePath: CONTROLLER_API_URL
    })
  }])
