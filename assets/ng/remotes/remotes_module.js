angular.module('rosieApp.remotes', [
  'js-data',
  'ui.router',
  'ui.bootstrap',
  'rosieApp.config',
  'rosieApp.header'
])
  .config(['MenuProvider', function(MenuProvider) {
    MenuProvider.add({
      title: 'Remotes',
      sref: 'app.remotes'
    })
  }])
