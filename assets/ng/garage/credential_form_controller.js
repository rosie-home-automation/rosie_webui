angular.module('rosieApp.garage')
  .controller('CredentialFormController', [
    '$scope', '$modalInstance', 'credential', 'userList',
    function($scope, $modalInstance, credential, userList) {
      $scope.titlePrefix = credential.id ? 'Edit' : 'Add' // TODO - this doesn't work
      $scope.credential = angular.copy(credential)
      $scope.userList = userList
      $scope.ok = function() {
        if ($scope.credentialForm.$valid) {
          $modalInstance.close($scope.credential)
        }
      }
      $scope.cancel = function() {
        $modalInstance.dismiss('cancel')
      }
    }
  ])
