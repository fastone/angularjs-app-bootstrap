/**
 * Rsync files
 */
'use strict';

var config = require('../config');

module.exports = {
	options: {
		args: ["--verbose"],
		exclude: [],
		recursive: true
	},
	live: {
		options: {
			src: config.path.dist + '/',
			dest: config.rsync.path,
			host: config.rsync.host,
			delete: false
		}
	}
}
