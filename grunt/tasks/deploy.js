module.exports = function(grunt) {
	grunt.registerTask('deploy', [
		'compile',
		'rsync:live'
	]);
};
