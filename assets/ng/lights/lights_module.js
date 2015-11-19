angular.module('rosieApp.lights', [
  'ui.router',
  'angularAwesomeSlider',
  'frapontillo.bootstrap-switch',
  'js-data',
  'rosieApp.config',
  'rosieApp.header'
])
  .config(['$stateProvider', 'LightServiceProvider', 'MenuProvider',
    function($stateProvider, lightServiceProvider, menuProvider) {
      $stateProvider
        .state('app.lights', {
          url: '/lights',
          templateUrl: 'ng/lights/index.tmpl.html',
          controller: 'LightsController as lightsCtrl',
          resolve: {
            lights: function(LightService) {
              return LightService.findAll()
            }
          }
        })

      menuProvider.add({
        title: 'Lights',
        sref: 'app.lights'
      })
    }
  ])
