angular.module('rosieApp.garage')
  .factory('Door', ['$http', 'GARAGE_API_URL', function($http, GARAGE_API_URL) {
    return {
      status: function() {
        return $http.get(GARAGE_API_URL + '/door')
          .then(function(response) {
            return response.data.status
          })
      },
      toggle: function() {
        return $http.get(GARAGE_API_URL + '/door/toggle')
      }
    }
  }])
