angular.module('rosieApp.remotes')
  .factory('Remote', ['DS', 'CONTROLLER_API_URL', function(DS, CONTROLLER_API_URL) {
    return DS.defineResource({
      name: 'remotes',
      basePath: CONTROLLER_API_URL
    })
  }])
