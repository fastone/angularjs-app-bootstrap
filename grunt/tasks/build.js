module.exports = function(grunt) {
	grunt.registerTask('build', [
		'clean:all',
		'bowercopy:build',
		'clean:bower',
		'template:config',
		'ngtemplates:build',
		'concat:build',
		'concat:buildapp',
		'closure-compiler:build',
		'usebanner:build',
		'copy:dist',
		'fileblocks:dist'
//		'clean:build',
	]);
};
