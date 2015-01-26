/*global angular*/

(function() {
	'use strict';

	/**
	 * Module routes config
	 *
	 */

	function config($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'home/views/index.html',
				module: 'app.home',
				controller: 'HomeController',
				controllerAs: 'vm'
			});
	}
	config.$inject = ['$routeProvider'];

	// Module getters
	angular
		.module('app.home', ['ngRoute'])
		.config(config);

}());
