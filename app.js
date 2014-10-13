var app = angular.module('app', []);

app.directive('tooltip', function () {
  return {
    restrict: 'E',
    link: function (scope, element, attrs) {
      element.tooltip({
        content: attrs.title
      });
    }
  }
});