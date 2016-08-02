var expect = require('chai').expect,
	HomeController = require('./../src/home/home.controller'),
	mocks = {
		todoFactory: require('./mocks/todo.factory')
	};

describe('Home Controller:', function () {
	var homeController = null,
		todoFactory = null;

	beforeEach(function () {
		todoFactory = mocks.todoFactory();
		homeController = new HomeController(todoFactory);
	});

	it('Todo should be stored', function () {
		homeController.createTodo();
		expect(todoFactory.todoStored).to.equal(true);
	});
});