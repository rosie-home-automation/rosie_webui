angular.module('rosieApp', [
  'ui.router',
  'rosieApp.layout',
  'rosieApp.lights',
  'rosieApp.remotes',
  'rosieApp.tasks'
])
  .config(['$urlRouterProvider', function($urlRouterProvider) {
    $urlRouterProvider.when('', '/lights')
    $urlRouterProvider.when('/', '/lights')
  }])
