(function(){
    'use strict';
    var lintTask = require('./.grunt/lint-task');
    var cleanTask = require('./.grunt/clean-task');
    var copyTask = require('./.grunt/copy-task');
    var lessTask = require('./.grunt/less-task');
    var concatTask = require('./.grunt/concat-task');
    var karmaTask = require('./.grunt/karma-task');
    var watchTask = require('./.grunt/watch-task');
    module.exports = function(grunt){
        grunt.log.writeln("Initialising");
        grunt.initConfig({
            jshint: lintTask,
            lesslint: lessTask,
            clean: cleanTask,
            copy: copyTask,
            less: lessTask,
            concat: concatTask,
            karma: karmaTask,
            watch: watchTask
        });

        grunt.log.writeln('Loading NPM Tasks');
        grunt.loadNpmTasks('grunt-contrib-jshint');
        grunt.loadNpmTasks('grunt-lesslint');
        grunt.loadNpmTasks('grunt-contrib-clean');
        grunt.loadNpmTasks('grunt-contrib-copy');
        grunt.loadNpmTasks('grunt-contrib-less');
        grunt.loadNpmTasks('grunt-contrib-concat');
        grunt.loadNpmTasks('grunt-karma');
        grunt.loadNpmTasks('grunt-contrib-watch');

        grunt.log.writeln("Loaded NPM Tasks");

        grunt.registerTask('deployless',['lesslint', 'clean:less', 'less']);
        grunt.registerTask('dirty', ['jshint', 'clean', 'copy', 'deployless', 'concat']);
        grunt.registerTask('nostart', ['dirty', 'karma']);
        grunt.registerTask('test', ['jshint', 'karma']); //used just for testing
        grunt.registerTask('default', ['nostart', 'watch']);
    };
}());