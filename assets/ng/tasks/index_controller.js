angular.module('rosieApp.tasks')
  .config(['$stateProvider', function($stateProvider) {
    $stateProvider
      .state('app.tasks', {
        url: '/tasks',
        templateUrl: 'ng/tasks/index.tmpl.html',
        controller: 'TasksIndexController as tasksIndexCtrl',
        resolve: {
          taskList: ['Task', function(Task) {
            return Task.findAll()
          }]
        }
      })
  }])
  .controller('TasksIndexController', [
    '$scope', '$modal', 'Task', 'taskList',
    function($scope, $modal, Task, taskList) {
      Task.bindAll({}, $scope, 'taskList')

      $scope.addTask = function() {
        Task.create({type: 'fell_asleep_aid'})
      }
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
          Task.update(task.id, editedTask)
          task.DSEject()// tasks get recreated
        })
      }
      $scope.deleteTask = function(task) {
        task.DSDestroy()
      }
    }
  ])
