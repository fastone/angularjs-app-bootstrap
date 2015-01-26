/**
 * Default configuration for Karma
 */
'use strict';

module.exports = function(config) {
	config.set({
		basePath: '../',
		
		autoWatch: true,

//		singleRun: true,
		colors: true,
//		captureTimeout: 7000,

		frameworks: ['jasmine'],
		reporters: ['progress', 'coverage'],

		preprocessors: {
			'build/assets/js/app.js': 'coverage',
		},

		plugins: [
			'karma-jasmine',
//			'karma-requirejs',
			'karma-coverage',
//			'karma-chrome-launcher',
//			'karma-firefox-launcher',
			'karma-safari-launcher'
//			'karma-phantomjs-launcher'
		],

		coverageReporter: {
			reporters: [{
				type: 'text-summary',
				dir: 'test/coverage/'
			}, {
				type: 'html',
				dir: 'test/coverage/'
			}]
		},

		logLevel: config.LOG_INFO,

		// List of files to load in the browser
		files: [
			'bower_components/angular/angular.js',
			'bower_components/angular-mocks/angular-mocks.js',
			'bower_components/angular-resource/angular-resource.js',
			'bower_components/angular-route/angular-route.js',
			'bower_components/angular-translate/angular-translate.js',
			'bower_components/angular-translate-loader-static-files/angular-translate-loader-static-files.js',
			'build/assets/js/app.js',
			'test/specs/**/*spec.js'
		]
	});
};
