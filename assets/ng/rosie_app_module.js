angular.module('rosieApp', [
  'ui.router',
  'rosieApp.layout',
  'rosieApp.lights',
  'rosieApp.remotes',
  'rosieApp.tasks'
])
  .run(function($rootScope) {
    $rootScope.$on("$stateChangeError", console.log.bind(console));
  })
