/**
 * Remove stuff
 */
'use strict';

var config = require('../config');

module.exports = {
	all: [
		'bower_components',
		config.path.build,
		config.path.dist,
		config.path.temp,
		config.path.testLibs
	],
	bower: [
		'bower_components'
	],
	build: [
		'bower_components',
		config.path.build,
		config.path.temp,
	]
};
