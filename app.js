var app = angular.module('app', []);

app.controller('controller', function($scope){
  angular.extend($scope, {
    config: {
      title: 'Exemplo com a diretiva!'
    }
  });
});

app.directive('tooltip', function () {
  return {
    restrict: 'E',
    link: function (scope, element, attrs) {
      element.tooltip({
        titleAttributeContent: scope[attrs['ngModel']].title
      });
    }
  }
});