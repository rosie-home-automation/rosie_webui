angular.module('rosieApp', ['restangular'])
  .config(function(RestangularProvider) {
    RestangularProvider.setBaseUrl('http://192.168.1.100:4001')
  })
