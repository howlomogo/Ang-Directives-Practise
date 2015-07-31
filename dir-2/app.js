var app = angular.module('myApp', []);

app.controller('MainCtrl', function($scope) {
  $scope.scope1 = 'test1';

  $scope.product1 = {
      name: 'Phone',
      price: '100',
      stock: true
  };
  $scope.product2 = {
      name: 'TV',
      price: '1000',
      stock: false
  };
  $scope.product3 = {
      name: 'Laptop',
      price: '800',
      stock: false
  };

  $scope.products = [$scope.product1, $scope.product2, $scope.product3];

  $scope.change = function() {
    $scope.product1.name = 'new';
  };
});

app.directive('dirOne', function() {
  return {
    restrict: 'E',
    template: "<button ng-click='change()'>Change Name</button>"
  };
});

app.directive('dirTwo', function () {
    return {
        restrict: 'E',
        scope: {
            name: '@',
            price:'@'
        },
        template: '<h3>Directive Two</h3>' +
                  '{{name}} costs £ {{price}}'
    };
});

app.directive('dirThree', function () {
    return {
        restrict: 'E',
        scope: {
          theproduct: '='
        },
        template: '<h3>Directive Three</h3>' +
                  '<p>{{theproduct.name}} costs £ {{theproduct.price}}</p>'
    };
});

app.directive('dirFour', function () {
  return {
    template: '<ul><li ng-repeat="item in products | orderBy:\'name\'">{{item.name}}</li></ul>'
  }
});


//Data can be passed as a string using the @ string literal -- one way binding
//--------------------------------------------------------------------------------
// Also keep in mind that when we pass data in isolated scope as a string,
// it get passed in a one-way manner, so any change in the controller scope
// will be reflected in the directive. However, a change in the directive would
// not be reflected in the controller.
//--------------------------------------------------------------------------------

//Data can be passed as an object using the = string literal -- two way binding
//Data can be passed as a function the & string literal -- can pass data from directive to controller