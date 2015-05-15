/**
 @module Tombola.Core.<MODULE_NAME>
 @class <ENTITY_NAME>
 */
(function () {
    module.exports = function(config) {
        config.set({

            // base path that will be used to resolve all patterns (eg. files, exclude)
            basePath: '',


            // frameworks to use
            // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
            frameworks: ['mocha', 'chai', 'sinon-chai'],


            // list of files / patterns to load in the browser
            //This is set in each sub task of the karma tasks grunt setup
            files: ['./bower_components/angular/angular.js',
                './bower_components/angular-mocks/angular-mocks.js',
                './main-app/app/scripts/modules.js',
                './main-app/app/scripts/providers/**/*.js',
                './main-app/app/scripts/filters/**/*.js',
                './main-app/app/scripts/directives/**/*.js',
                './main-app/app/scripts/controllers.js',
                './main-app/tests/**/*.tests.js'
            ],


            // list of files to exclude
            exclude: [
            ],


            // preprocess matching files before serving them to the browser
            // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
            preprocessors: {
            },


            // test results reporter to use
            // possible values: 'dots', 'progress'
            // available reporters: https://npmjs.org/browse/keyword/karma-reporter
            reporters: ['nyan'],


            // web server port
            port: 9876,


            // enable / disable colors in the output (reporters and logs)ka
            colors: true,


            // level of logging
            // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
            logLevel: config.LOG_INFO,


            // enable / disable watching file and executing tests whenever any file changes
            autoWatch: true,


            // start these browsers
            // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
            browsers: ['PhantomJS'],


            // Continuous Integration mode
            // if true, Karma captures browsers, runs the tests and exits
            singleRun: true
        });
    };
})();