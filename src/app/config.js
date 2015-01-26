/*global angular*/

(function() {
	'use strict';

	angular
		.module('app', [
			'app.home',
			'ngRoute',
			'ngResource',
			'pascalprecht.translate'
		])
		.constant('APP_SETTINGS', {
			"api": "<%- api %>",
			"translations": {
				"prefix": "<%- translations.prefix %>",
				"suffix": "<%- translations.suffix %>",
				"language": "<%- translations.language %>"
			}
		});

}());
