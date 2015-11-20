angular.module('rosieApp.garage')
  .config(['$stateProvider', function($stateProvider) {
    $stateProvider
      .state('app.garage.users', {
        url: '/users',
        views: {
          '': {
            templateUrl: 'ng/garage/users.tmpl.html',
            controller: 'GarageUsersController as garageUsersCtrl',
            resolve: {
              userList: ['User', function(User) {
                return User.findAll()
              }]
            }
          },
          'breadcrumb': {
            template: 'Users'
          }
        }
      })
  }])
  .controller('GarageUsersController', [
    '$scope', '$modal', 'User', 'userList',
    function($scope, $modal, User, userList) {
      User.bindAll({}, $scope, 'userList')
      $scope.addUser = function() {
        var formModal = $modal.open({
          templateUrl: 'ng/garage/user_form.tmpl.html',
          controller: 'UserFormController as userFormController',
          resolve: {
            user: function() {
              return User.createInstance()
            }
          }
        })
        formModal.result.then(function(newUser) {
          User.create(newUser)
        })
      }
      $scope.editUser = function(user) {
        var formModal = $modal.open({
          templateUrl: 'ng/garage/user_form.tmpl.html',
          controller: 'UserFormController as userFormController',
          resolve: {
            user: function() {
              return user
            }
          }
        })
        formModal.result.then(function(editUser) {
          user.DSUpdate(editUser)
        })
      }
      $scope.deleteUser = function(user) {
        user.DSDestroy()
      }
    }
  ])
