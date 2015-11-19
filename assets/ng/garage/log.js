angular.module('rosieApp.garage')
  .factory('Log', ['DS', 'GARAGE_API_URL', function(DS, GARAGE_API_URL) {
    return DS.defineResource({
      name: 'log',
      endpoint: 'logs',
      basePath: GARAGE_API_URL,
      relations: {
        belongsTo: {
          user: {
            localField: 'user',
            localKey: 'userId'
          }
        }
      }
    })
  }])
