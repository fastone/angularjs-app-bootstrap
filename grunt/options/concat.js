/**
 * Concatenate files
 */
'use strict';

var config = require('../config');

module.exports = {
	build: {
		files: [{
			dest: config.path.temp + '/app.js',
			src: [
				config.path.srcApp + '/*.js',
				config.path.srcApp + '/*/*.js',
				config.path.srcApp + '/modules/*/routes.js',
				config.path.srcApp + '/modules/*/*.js',
				config.path.srcApp + '/**/*.js',
				'!' + config.path.srcApp + '/config.js',
				'!' + config.path.srcApp + '/app.js',
				'!' + config.path.srcApp + '/routes.js',
				'!' + config.path.srcApp + '/bootstrap.js'
			]
		}]
	},
	buildapp: {
		files: [{
			dest: config.path.buildAssetsJs + '/app.js',
			src: [
				config.path.srcApp + '/functions.js',
				config.path.temp + '/config.js',
				config.path.srcApp + '/app.js',
				config.path.temp + '/app.js',
				config.path.temp + '/templates.js',
				config.path.srcApp + '/routes.js'
			]
		}]
	}
};
