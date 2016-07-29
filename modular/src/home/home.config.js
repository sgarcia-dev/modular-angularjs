angular.module('myApp.home')
	.config(['$stateProvider',
		function ($stateProvider) {
			console.log('also reached!');
			$stateProvider.state('home', {
				url: "/home",
				templateUrl: "template/home.html",
				controller: 'homeController',
				controllerAs: 'homeCtrl'
			});
		}]);