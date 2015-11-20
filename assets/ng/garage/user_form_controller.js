angular.module('rosieApp.garage')
  .controller('UserFormController', [
    '$scope', '$modalInstance', 'user',
    function($scope, $modalInstance, user) {
      $scope.titlePrefix = user.id ? 'Edit' : 'Add' // TODO - this doesn't work
      $scope.user = angular.copy(user)
      $scope.ok = function() {
        if ($scope.userForm.$valid) {
          $modalInstance.close($scope.user)
        }
      }
      $scope.cancel = function() {
        $modalInstance.dismiss('cancel')
      }
    }
  ])
