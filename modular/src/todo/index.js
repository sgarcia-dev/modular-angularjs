angular.module('myApp.todo', [])
	.factory('todoFactory', require('./todo.factory'))
	.directive('todo', ['todoFactory', require('./todo.directive')])
	.filter('dateformat', require('./todo-date.filter'));
