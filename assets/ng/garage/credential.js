angular.module('rosieApp.garage')
  .factory('Credential', ['DS', 'GARAGE_API_URL', 'User', function(DS, GARAGE_API_URL, User) {
    return DS.defineResource({
      name: 'credential',
      endpoint: 'credentials',
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
