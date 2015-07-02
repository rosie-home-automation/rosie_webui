angular.module('rosieApp.controllerApi', [
  'restangular',
  'rosieApp.config'
])
  .service('ControllerApi', ['Restangular', 'CONTROLLER_API_URL', function(restangular, CONTROLLER_API_URL) {
    return restangular.withConfig(function(RestangularConfigurer) {
      RestangularConfigurer.setBaseUrl(CONTROLLER_API_URL)
      RestangularConfigurer.setDefaultHttpFields({withCredentials: true})
    })
  }])
