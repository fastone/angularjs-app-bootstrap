/**
 * Generate application config file
 */
'use strict';

var config = require('../config');
var env = process.env.ENV || 'development';

module.exports = {
	config: {
		options: {
			data: require('../../src/config/' + env + '.json')
		},
		files: [{
			dest: config.path.temp + '/config.js',
			src: [
				config.path.srcApp + '/config.js'
			]
		}]
	}
};
