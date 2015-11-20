angular.module('rosieApp.header')
  .directive('menuBase', ['$compile', function($compile) {
    return {
      scope: {
        item: '=',
        navCollapse: '&'
      },
      replace: true,
      restrict: 'A',
      link: function(scope, element, attr) {
        var type = scope.item.sref ? 'item' : 'dropdown'
        element.append('<div menu-' + type + ' item="item" nav-collapse="navCollapse()"></div>')
        var e = $compile(element.contents())(scope)
        element.replaceWith(e)
      }
    }
  }])
  .directive('menuItem', function() {
    return {
      scope: {
        item: '=',
        navCollapse: '&'
      },
      replace: true,
      restrict: 'A',
      templateUrl: 'ng/header/_menu_item.tmpl.html'
    }
  })
  .directive('menuDropdown', function() {
    return {
      scope: {
        item: '=',
        navCollapse: '&'
      },
      replace: true,
      restrict: 'A',
      templateUrl: 'ng/header/_menu_dropdown.tmpl.html'
    }
  })
