/**
 * NG Templates
 */
'use strict';

var config = require('../config');

module.exports = {
	build: {
		options: {
			base: config.path.srcApp + '/modules',
			module: config.module
		},
		dest: config.path.temp + '/templates.js',
		src: [
			config.path.srcApp + '/**/*.html',
			config.path.srcApp + '/**/*.svg',
			'!' + config.path.srcApp + '/index.html',
		]
	}
};
