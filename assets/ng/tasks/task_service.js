angular.module('rosieApp.tasks')
  .factory('Task', ['DS', 'CONTROLLER_API_URL', function(DS, CONTROLLER_API_URL) {
    return DS.defineResource({
      name: 'queue',
      basePath: CONTROLLER_API_URL
    })
  }])
