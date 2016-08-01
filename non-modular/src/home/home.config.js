angular.module('myApp.home')
	.config(['$stateProvider',
		function ($stateProvider) {
			$stateProvider.state('home', {
				url: "/home",
				templateUrl: "template/home.html",
				controller: 'homeController',
				controllerAs: 'homeCtrl'
			});
		}]);