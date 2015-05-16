(function(angular) {
  'use strict'

  angular.module('rosieApp', ['ngSlider', 'restangular'])
    .config(function(RestangularProvider) {
      RestangularProvider.setBaseUrl('http://192.168.1.100:4001')
      RestangularProvider.setDefaultHttpFields({withCredentials: true})
    })
})(angular)
