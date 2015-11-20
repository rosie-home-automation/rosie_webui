angular.module('rosieApp.garage')
  .factory('User', ['DS', 'GARAGE_API_URL', function(DS, GARAGE_API_URL) {
    return DS.defineResource({
      name: 'user',
      endpoint: 'users',
      basePath: GARAGE_API_URL
    })
  }])
