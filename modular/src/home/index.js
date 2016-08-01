angular.module('myApp.home', ['myApp.todo'])
	.config(['$stateProvider', require('./home.config')])
	.controller('homeController', ['todoFactory', require('./home.controller')]);
