angular.module('myApp.common')
	.service('todoService', function () {
		init();
		this.addTodo = addTodo;
		this.removeTodo = removeTodo;
		this.todos = getTodos();

		function init() {
			if (!getTodos()) {
				var newTodos = [];
				newTodos.push(createTodo('Sample Todo'));
				localStorage.setItem('todos', JSON.stringify(newTodos));
			}
		}

		function getTodos() {
			return JSON.parse(localStorage.getItem('todos'));
		}

		function setTodos(newTodos) {
			localStorage.setItem('todos', JSON.stringify(newTodos))
		}

		function addTodo(content) {
			this.todos.push(createTodo(content));
			setTodos(this.todos);
		}

		function removeTodo(id) {
			var todosLength = this.todos.length;
			for (var i = 0; i < todosLength; i++) {
				if (this.todos[i].id == id) {
					this.todos.splice(i,1);
					setTodos(this.todos);
					break;
				}
			}
		}

		function createTodo(content) {
			return {
				id: new Date().getTime(),
				content: content,
				date: new Date()
			}
		}
	});