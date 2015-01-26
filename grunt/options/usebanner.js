/**
 * Uglify
 */
'use strict';

var config = require('../config');

module.exports = {
	build: {
		options: {
			position: 'top',
			banner: config.banner
		},
		files: [{
			src: [
				config.path.buildAssetsJs + '/app.min.js',
			]
		}]
	}
};
