angular.module('myApp.home')
	.controller('homeController', ['todoFactory', function(todoFactory) {
		this.message = 'hello world from controller';
		this.todos = todoFactory.todos;

		this.createTodo = function() {
			todoFactory.addTodo(this.newTodoTxt);
			this.newTodoTxt = '';
		}
	}]);