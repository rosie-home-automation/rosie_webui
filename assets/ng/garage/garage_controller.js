angular.module('rosieApp.garage')
  .config(['$stateProvider', function($stateProvider) {
    $stateProvider
      .state('app.garage', {
        abstract: true,
        url: '/garage',
        templateUrl: 'ng/garage/garage.tmpl.html'
      })
  }])
