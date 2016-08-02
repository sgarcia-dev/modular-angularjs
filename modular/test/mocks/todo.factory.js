function todoFactory() {
	var todoFactory = {
		todoStored: false,
		lastTodo: null,
		todos: [
			{
				id: new Date().getTime(),
				content: 'Sample Todo',
				date: new Date()
			}
		],
		addTodo: function (todo) {
			todoFactory.lastTodo = todo;
			todoFactory.todoStored = true;
			return true;
		}
	};
	return todoFactory;
}

module.exports = todoFactory;