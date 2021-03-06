(function(){
    'use strict';

    module.exports = {
        html: {
            files: ['./main-app/app/*.html'],
            tasks: ['clean:html', 'copy:html']
        },

        less:{
            files: ['./main-app/app/less/*.less'],
            tasks: ['deployless']
        },

        sounds: {
            files: ['./main-app/app/sounds/*.*'],
            tasks: ['clean:sounds', 'copy:sounds']
        },

        favicons:{
            files: ['./main-app/app/favicons/*.*'],
            tasks: ['clean:favicons', 'copy:favicons']
        },

        appjs:{
            files: ['./main-app/app/scripts/**/*.js'],
            tasks: ['clean:appjs', 'concat:appjs']
        },

        gruntjs: {
            files: ['./gruntfile.js', './.grunt/*.js'],
            tasks: ['jshint:gruntfiles', 'nostart']
        }
    };
}());
