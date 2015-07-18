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
  .controller('TasksIndexController', [
    '$scope', '$modal', 'TaskService', 'taskList',
    function($scope, $modal, TaskService, taskList) {
      $scope.taskList = taskList
      $scope.editTask = function(task) {
        var editModal = $modal.open({
          templateUrl: 'ng/tasks/form.tmpl.html',
          controller: 'TaskEditFormController as tefCtrl',
          resolve: {
            task: function() {
              return task
            }
          }
        })

        editModal.result.then(function(editedTask) {
          console.log("EDITED", editedTask)
          console.log("ORIGIN", task)
        })
      }
    }
  ])
