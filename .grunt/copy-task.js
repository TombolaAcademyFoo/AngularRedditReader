(function(){
    'use strict';

    module.exports = {
            html:{
                cwd:'',
                src: ['main-app/app/*.html'],
                dest: '.build/',
                expand: true
            },
            bowerComponents:{
                cwd:'bower_components',
                src: ['**/*.*'],
                dest: '.build/main-app/app/thirdparty',
                expand: true
            },
            sounds:{
                src: ['main-app/app/sounds/*.mp3'],
                dest: '.build/'
            },
            favicons:{
                cwd:'main-app/app/favicons',
                src: ['*.ico'],
                dest:'.build/main-app/app',
                expand: true
            },
            resources:{},
            views:{},
            images:{}
        };
}());
