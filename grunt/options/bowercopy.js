/**
 * Copy bower.json assets
 */
'use strict';

var config = require('../config');

module.exports = {
	build: {
		options: {
			destPrefix: config.path.buildAssetsJsLibs,
			clean: false
		},
		files: {
			'angular/angular.min.js': 'angular/angular.min.js',
			'angular/angular-resource.min.js': 'angular-resource/angular-resource.min.js',
			'angular/angular-route.min.js': 'angular-route/angular-route.min.js',
			'angular/angular-translate.min.js': 'angular-translate/angular-translate.min.js',
			'angular/angular-translate-loader-static-files.min.js': 'angular-translate-loader-static-files/angular-translate-loader-static-files.min.js'
		}
	}
};
