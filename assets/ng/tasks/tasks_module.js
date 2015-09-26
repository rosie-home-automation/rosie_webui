angular.module('rosieApp.tasks', [
  'angularMoment',
  'rosieApp.translations',
  'rosieApp.header',
  'ui.bootstrap',
  'ui.bootstrap.datetimepicker',
  'ui.router'
])
  .config(['$stateProvider', 'MenuProvider', function($stateProvider, menuProvider) {
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

    menuProvider.add({
      title: 'Tasks',
      sref: 'app.tasks'
    })
  }])
