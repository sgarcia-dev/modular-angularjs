function todoDirective(todoFactory) {
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
				todoFactory.removeTodo(attrs.id);
				scope.$apply();
			});
		}
	}
}

module.exports = todoDirective;