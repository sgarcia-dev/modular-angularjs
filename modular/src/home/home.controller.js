function homeController(todoFactory) {
	this.newTodoTxt = '';
	this.todos = todoFactory.todos;

	this.createTodo = function() {
		todoFactory.addTodo(this.newTodoTxt);
		this.newTodoTxt = '';
	}
}

module.exports = homeController;