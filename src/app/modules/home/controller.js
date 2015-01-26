/*global angular*/

(function() {
	'use strict';

	function HomeController(settings, $q, $interval, $rootScope, ExampleModel) {
		var vm = this;

		function activate() {

            ExampleModel.jsonp({
                parameter1: 1,
                parameter2: 2
            }).$promise.then(function(data) {
				console.dir(data);
			});

            ExampleModel.get({
                parameter1: 1,
                parameter2: 2
            }).$promise.then(function(data) {
				console.dir(data);
			});

		}

		activate();
	}

	HomeController.$inject = ['APP_SETTINGS', '$q', '$interval', '$rootScope', 'ExampleModel'];

	angular
		.module('app.home')
		.controller('HomeController', HomeController);

}());
