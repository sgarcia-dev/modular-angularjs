angular.module('myApp')
	.config(['$urlRouterProvider',
		function ($urlRouterProvider) {
			$urlRouterProvider.otherwise('/home');
		}]);