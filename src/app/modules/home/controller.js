/*global angular*/

(function() {
	'use strict';

	function HomeController(settings, $q, $interval, $rootScope, ExampleModel) {
		var vm = this;

		function activate() {

		}

		activate();
	}

	HomeController.$inject = ['APP_SETTINGS', '$q', '$interval', '$rootScope', 'ExampleModel'];

	angular
		.module('app.home')
		.controller('HomeController', HomeController);

}());
