function todoFactory() {
	var todos;
	init();
	return {
		addTodo: addTodo,
		removeTodo: removeTodo,
		todos: todos
	};

	function init() {
		todos = getTodos();
		if (!todos) {
			todos = [];
			todos.push(createTodo('Sample Todo'));
			localStorage.setItem('todos', JSON.stringify(todos));
		}
	}

	function getTodos() {
		return JSON.parse(localStorage.getItem('todos'));
	}

	function setTodos(newTodos) {
		localStorage.setItem('todos', JSON.stringify(newTodos))
	}

	function addTodo(content) {
		todos.push(createTodo(content));
		setTodos(todos);
	}

	function removeTodo(id) {
		var todosLength = todos.length;
		for (var i = 0; i < todosLength; i++) {
			if (todos[i].id == id) {
				todos.splice(i,1);
				setTodos(todos);
				return true;
			}
		}
		return false;
	}

	function createTodo(content) {
		return {
			id: new Date().getTime(),
			content: content,
			date: new Date()
		}
	}
}

module.exports = todoFactory;