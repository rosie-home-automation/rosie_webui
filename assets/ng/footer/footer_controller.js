angular.module('rosieApp.footer')
  .directive('appFooter', function() {
    return {
      scope: true,
      restrict: 'A',
      templateUrl: 'ng/footer/_footer.tmpl.html'
    }
  })
