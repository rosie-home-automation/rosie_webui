angular.module('rosieApp.layout', [
  'ui.router',
  'rosieApp.header',
  'rosieApp.footer'
])
  .config(['$stateProvider', function($stateProvider) {
    $stateProvider
      .state('app', {
        abstract: true,
        templateUrl: 'ng/layout/layout.tmpl.html'
      })
  }])
