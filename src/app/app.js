/*global angular*/

(function() {
	'use strict';

	function config(settings, $httpProvider, $translateProvider, $locationProvider, $compileProvider, HttpInterceptorProvider) {
		// Enable enhancements
		// http://ng-perf.com/2014/10/24/simple-trick-to-speed-up-your-angularjs-app-load-time/
		$compileProvider.debugInfoEnabled(false);

		// Load the custom http interceptor
		$httpProvider.interceptors.push('HttpInterceptor');

		// Set API endpoint protocol ( api:// )
		HttpInterceptorProvider.use({
			'api': settings.api
		});

		// Load the translations
		// translations variable comes from language file
		$translateProvider.useStaticFilesLoader({
			prefix: settings.translations.prefix, // url
			suffix: settings.translations.suffix // .json
		});
		$translateProvider.preferredLanguage(settings.translations.language); // en_GB

		// HTML5 Mode
		// https://docs.angularjs.org/guide/$location
		$locationProvider.html5Mode(true).hashPrefix('!');
	}
	config.$inject = ['APP_SETTINGS', '$httpProvider', '$translateProvider', '$locationProvider', '$compileProvider', 'HttpInterceptorProvider'];

	angular
		.module('app')
		.config(config);

}());
