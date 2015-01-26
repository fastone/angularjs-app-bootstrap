/**
 * Fileblocks in index.html
 */
'use strict';

var config = require('../config');

module.exports = {
	options: {
		templates: {
			css: '<link rel="stylesheet" href="${file}" />',
			js: '<script src="${file}"></script>'
		},
		removeFiles: true,
		removeAnchors: true
	},
	dist: {
		src: config.path.src + '/index.html',
		dest: config.path.dist + '/index.html',
		blocks: {
			'libs': {
				src: [
					'angular/angular.min.js',
					'angular/angular-resource.min.js',
					'angular/angular-route.min.js',
					'angular/angular-translate.min.js',
					'angular/angular-translate-loader-static-files.min.js'
				],
				cwd: config.path.distAssetsJsLibs,
				prefix: config.path.webAssetsJsLibs
			},
			'app': {
				src: [
					'app.min.js',
				],
				cwd: config.path.distAssetsJs,
				prefix: config.path.webAssetsJs
			},
			'stylesheets': {
				cwd: config.path.distAssetsCss,
				prefix: config.path.webAssetsCss
			}
		}
	}
};
