// load required angular modules
require('./vendor-dependencies');
require('./todo');
require('./home');

angular.module('myApp', ['ui.router', 'myApp.home'])
	.config(require('./config'));