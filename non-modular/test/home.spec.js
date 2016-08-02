var todoFactoryMock = {
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
		todoFactoryMock.lastTodo = todo;
		todoFactoryMock.todoStored = true;
		return true;
	}
};

describe('Home Controller:', function () {
	beforeEach(function () {
		module('myApp');
	});

	var $controller = null;
	beforeEach(inject(function (_$controller_) {
		$controller = _$controller_;
	}));

	var homeController = null;
	beforeEach(function () {
		homeController = $controller('homeController', {
			todoFactory: todoFactoryMock
		});
	});

	it('Should mark todo as saved', function () {
		homeController.createTodo();
		expect(todoFactoryMock.todoStored).to.equal(true);
	});
});