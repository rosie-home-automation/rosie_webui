angular.module('rosieApp.garage')
  .factory('Garage', ['DS', 'GARAGE_API_URL', function(DS, GARAGE_API_URL) {
    return DS.defineResource({
      name: 'garage',
      basePath: GARAGE_API_URL
    })
  }])
