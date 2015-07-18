angular.module('rosieApp.tasks')
  .controller('TaskEditFormController', [
    '$scope', '$modalInstance', 'task',
    function($scope, $modalInstance, task) {
      $scope.dateOpened = false
      $scope.dateOptions = {
        showWeeks: false
      }
      $scope.task = angular.copy(task)
      $scope.ok = function() {
        $modalInstance.close($scope.task)
      }
      $scope.cancel = function() {
        $modalInstance.dismiss('cancel')
      }
    }
  ])
