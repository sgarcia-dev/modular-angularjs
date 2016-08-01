angular.module('myApp.todo')
	.filter('custom', function() {
		return function(input) {
			return new Date(input).toLocaleString();
		}
	});