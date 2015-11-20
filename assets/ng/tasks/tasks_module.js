angular.module('rosieApp.tasks', [
  'angularMoment',
  'js-data',
  'ui.bootstrap',
  'ui.bootstrap.datetimepicker',
  'ui.router',
  'rosieApp.translations',
  'rosieApp.header'
])
  .config(['MenuProvider', function(MenuProvider) {
    MenuProvider.add({
      title: 'Tasks',
      sref: 'app.tasks'
    })
  }])
