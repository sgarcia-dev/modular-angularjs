function homeConfig($stateProvider) {
	$stateProvider.state('home', {
		url: "/home",
		templateUrl: "template/home.html",
		controller: 'homeController',
		controllerAs: 'homeCtrl'
	});
}

module.exports = homeConfig;