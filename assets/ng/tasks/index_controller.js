angular.module('rosieApp.tasks')
  .config(['$stateProvider', function($stateProvider) {
    $stateProvider
      .state('app.tasks', {
        url: '/tasks',
        templateUrl: 'ng/tasks/index.tmpl.html',
        controller: 'TasksIndexController as tasksIndexCtrl',
        resolve: {
          taskList: ['TaskService', function(TaskService) {
            return TaskService.getList()
          }]
        }
      })
  }])
  .controller('TasksIndexController', ['$scope', 'TaskService', 'taskList', function($scope, TaskService, taskList) {
    $scope.taskList = taskList
    $scope.sendTask = function(taskName) {
      var task = TaskService.one(taskName).post()
    }
  }])
