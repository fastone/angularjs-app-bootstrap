/**
 * General Grunt setup
 */
'use strict';

var xtend = require('xtend');

/**
 * Load configuration files for Grunt
 * @param  {string} path Path to folder with tasks
 * @return {object}      All options
 */
var loadConfig = function(path) {
	var glob = require('glob');
	var object = {};
	var key;

	glob.sync('*', {
		cwd: path
	}).forEach(function(option) {
		key = option.replace(/\.js$/, '');
		object[key] = require(path + option);
	});

	return object;
};

/*
 * Call Grunt configuration
 */
module.exports = function(grunt) {

	// Measure time of grunt tasks
	require('time-grunt')(grunt);

	var config = xtend({
		pkg: require('./package')
	}, loadConfig('./grunt/options/'), loadConfig('./grunt/plugins/'));

	// Load project configuration
	grunt.initConfig(config);

	// Load all npm tasks through jit-grunt (all tasks from node_modules)
	require('jit-grunt')(grunt, {
		fileblocks: 'grunt-file-blocks',
		ngtemplates: 'grunt-angular-templates',
		usebanner: 'grunt-banner'
	});

	// Load your own tasks
	grunt.task.loadTasks('./grunt/tasks');
};
