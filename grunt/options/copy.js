/**
 * Copy files
 */
'use strict';

var config = require('../config');

module.exports = {
	dist: {
		files: [{
			expand: true,
			cwd: config.path.build,
			src: [
				'**',
				'!assets/js/app.js',
				'!assets/js/app.min.js.report.txt'
			],
			dest: config.path.dist
		}, {
			expand: true,			
			cwd: config.path.src,
			src: ['.htaccess'],
			dest: config.path.dist
		}, {
			expand: true,			
			cwd: './',
			src: [config.path.languages + '/**'],
			dest: config.path.dist
		}]
	}
}
