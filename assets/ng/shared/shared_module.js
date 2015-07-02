angular.module('rosieApp.shared', [
  'ui.router'
])
  .config(['$stateProvider', function($stateProvider) {
    $stateProvider
      .state('app', {
        abstract: true,
        views: {
          '': {
            templateUrl: 'ng/shared/layout.tmpl.html'
          },
          'header': {
            templateUrl: 'ng/shared/_header.tmpl.html'
          },
          'footer': {
            templateUrl: 'ng/shared/_footer.tmpl.html'
          }
        }
      })
  }])
