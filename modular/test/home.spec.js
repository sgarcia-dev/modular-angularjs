var expect = require('chai').expect,
	HomeController = require('./../src/home/home.controller'),
	todoFactoryMock = require('./mocks/todo.factory');

describe('Home Controller:', function () {
	var homeController = null,
		todoFactory = null;

	beforeEach(function () {
		todoFactory = todoFactoryMock();
		homeController = new HomeController(todoFactory);
	});

	it('Should mark todo as saved', function () {
		homeController.createTodo();
		expect(todoFactory.todoStored).to.equal(true);
	});
});