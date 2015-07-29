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
  .directive('formatDate', ['$filter', function($filter) {
    return {
      restrict: 'A',
      require: '?ngModel',
      link: function(scope, element, attrs, ngModel) {
        ngModel.$formatters.push(function(modelValue) {
          return $filter('date')(modelValue, 'yyyy-MM-dd HH:mm')
        })
        ngModel.$parsers.push(function(viewValue) {
          return viewValue.getTime()
        })
      },
      controller: ['$scope', function($scope) {
        $scope.timeOptions = {
          showMeridian: false
        }

        $scope.promote_at_open = false

        $scope.openCalendar = function(event) {
          event.preventDefault()
          event.stopPropagation()

          $scope.promote_at_open = true
        }
      }]
    }
  }])
