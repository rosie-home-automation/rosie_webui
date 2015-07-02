angular.module('rosieApp.remotes')
  .service('RemoteService', ['ControllerApi', function(controllerApi) {
    return controllerApi.service('remotes')
  }])
