angular.module('rosieApp.garage')
  .config(['$stateProvider', function($stateProvider) {
    $stateProvider
      .state('app.garage.credentials', {
        url: '/credentials',
        views: {
          '': {
            templateUrl: 'ng/garage/credentials.tmpl.html',
            controller: 'GarageCredentialsController as garageCredentialsCtrl',
            resolve: {
              credentialList: ['Credential', 'User', function(Credential, User) {
                return Credential.findAll()
                  .then(function(credentials) {
                    _.each(credentials, function(credential) {
                      User.find(credential.userId)
                    })
                    return credentials
                  })
              }]
            }
          },
          'breadcrumb': {
            template: 'Credentials'
          }
        }
      })
  }])
  .controller('GarageCredentialsController', [
    '$scope', '$modal', 'Credential', 'User', 'credentialList',
    function($scope, $modal, Credential, User, credentialList) {
      Credential.bindAll({}, $scope, 'credentialList')
      $scope.addCredential = function() {
        var formModal = $modal.open({
          templateUrl: 'ng/garage/credential_form.tmpl.html',
          controller: 'CredentialFormController as credentialFormController',
          resolve: {
            credential: function() {
              return Credential.createInstance()
            },
            userList: ['User', function(User) {
              return User.findAll()
            }]
          }
        })
        formModal.result.then(function(newCredential) {
          Credential.create(newCredential)
        })
      }
      // $scope.editUser = function(user) {
      //   var formModal = $modal.open({
      //     templateUrl: 'ng/garage/user_form.tmpl.html',
      //     controller: 'UserFormController as userFormController',
      //     resolve: {
      //       user: function() {
      //         return user
      //       }
      //     }
      //   })
      //   formModal.result.then(function(editUser) {
      //     user.DSUpdate(editUser)
      //   })
      // }
      $scope.deleteCredential = function(credential) {
        credential.DSDestroy()
      }
    }
  ])
