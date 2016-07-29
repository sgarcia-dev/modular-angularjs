angular.module('myApp.home')
	.controller('homeController', ['todoService', function(todoService) {
		this.message = 'hello world from controller';
		this.todos = todoService.todos;

		this.createTodo = function() {
			todoService.addTodo(this.newTodoTxt);
			this.newTodoTxt = '';
		}
	}]);