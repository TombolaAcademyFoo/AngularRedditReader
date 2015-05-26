(function(){
    'use strict';

    module.exports = {
        html:['.build/main-app/**/app/*.html'],
        bower:['.build/main-app/app/thirdparty'],
        appjs:['.build/main-app/app/scripts/*.js'],
        less:['.build/main-app/app/css/*.*'],
        sounds:['.build/main-app/app/sounds/*.*'],
        favicons:['.build/main-app/app/*.ico'],
        clean: ['.build']
    };
}());