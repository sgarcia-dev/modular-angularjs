angular.module('myApp.todo')
	.directive('todo', ['todoService', function(todoService) {
		return {
			restrict: 'E',
			templateUrl: 'template/todo.html',
			bindToController: {
				content: '@',
				date: '@',
				id: '@'
			},
			controller: function() {

			},
			controllerAs: 'todoCtrl',
			link: function (scope, el, attrs) {
				el.on('click', function() {
					todoService.removeTodo(attrs.id);
					scope.$apply();
				});
			}
		}
	}]);