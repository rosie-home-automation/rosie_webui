angular.module('rosieApp.lights')
  .service('LightService', ['ControllerApi', function(controllerApi) {
    return controllerApi.service('zwave')
  }])
