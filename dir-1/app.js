var app = angular.module('myApp', []);

app.controller('MainCtrl', function($scope) {
  $scope.activeMenu = 'page1';
  $scope.shit = true;
});

app.directive('firstDirective', function() {
  return {
    template: 'Name: {{activeMenu}}'
  };
});

app.directive('secondDirective', function() {
	return {
		restrict: 'E',
		scope: {
			searchText: '=',
			placeholder: '@',
			usedLucky: '='
		},
		template:
		'<div>' +
			'<input type="text" ng-model="tempSearchText" />' +
			'<button ng-click="searchClicked()">' +
			'Search' +
			'</button>' +
			'<button ng-click="luckyClicked()">' +
			' I\'m feeling lucky' +
			'</button>' +
			'</div>',
		link: function(scope, element, attrs) {
			scope.searchClicked = function() {
				$scope.searchText = $scope.tempSearchText;
				$scope.usedLucky = false;
			}
			scope.luckyClicked = function() {
				$scope.searchText = $scope.tempSearchText;
				$scope.usedLucky = true;
			}
		}
	}
});


app.directive('directiveThree', function () {
    var link = function (scope, element, attrs) {                        
        function init() {
            var html = '<p>This is some random html</p>';
            
            element.html(html);
            element.addClass("cheese");
            element.on('click', function() {
                doSomething();
            });
        }

        function doSomething() {
        	element.hasClass("cheese") ? element.removeClass("cheese") : element.addClass("cheese");
            console.log("This is something");
        }

        init();
      };
      
      return {
          restrict: 'E',
          scope: {
              datasource: '=',
              add: '&',
          },
          link: link
      };
  });