/*global angular*/

(function() {
	'use strict';

	/**
	 * Main app routes config
	 *
	 */

	function config($routeProvider) {
		// .. if everything fails, fallback to main
		$routeProvider.otherwise({
			redirectTo: '/'
		});
	}
	config.$inject = ['$routeProvider'];

	// Module getters
	angular
		.module('app')
		.config(config);

}());
