angular.module('rosieApp.header')
  .provider('Menu', function() {
    var _menu = []

    this.$get = function() {
      return {
        getItems: function() {
          return _menu
        }
      }
    }

    this.add = function(item) {
      _menu.push(item)
    }
  })
