angular.module('rosieApp.garage', [
  'js-data',
  'ui.bootstrap',
  'ui.router',
  'rosieApp.config',
  'rosieApp.header'
])
  .config(['MenuProvider', function(MenuProvider) {
    MenuProvider.add({
      title: 'Garage',
      submenu: [
        {
          title: 'Opener',
          sref: 'app.garage.opener'
        },
        {
          title: 'Users',
          sref: 'app.garage.users'
        },
        {
          title: 'Credentials',
          sref: 'app.garage.credentials'
        },
        {
          title: 'Log',
          sref: 'app.garage.logs'
        }
      ]
    })
  }])
