angular.module('rosieApp.tasks')
  .service('TaskService', ['ControllerApi', function(controllerApi) {
    return controllerApi.service('queue')
  }])
