/**
 * Google Closure Compiler
 */
'use strict';

var config = require('../config');

module.exports = {
	build: {
		js: config.path.buildAssetsJs + '/app.js',
		jsOutputFile: config.path.buildAssetsJs + '/app.min.js',
		reportFile: config.path.buildAssetsJs + '/app.min.js.report.txt',
		maxBuffer: 500,
		options: {
			compilation_level: 'SIMPLE_OPTIMIZATIONS',
			language_in: 'ECMASCRIPT5_STRICT',
		}
	}
};
