angular.module('rosieApp.controllerApi', [
  'js-data',
  'rosieApp.config'
])
  .config(['DSHttpAdapterProvider', 'CONTROLLER_API_URL',
    function(DSHttpAdapterProvider, CONTROLLER_API_URL) {
      DSHttpAdapterProvider.defaults.basePath = CONTROLLER_API_URL
    }])
