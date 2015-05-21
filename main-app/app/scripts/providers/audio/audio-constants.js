(function () {
    'use strict';
    angular.module('Tombola.Reddit.Audio')
        .constant('AudioConstants', {
            sourceUrl: 'sounds/reddit-sprite.mp3',
            sourceType:'audio/mp3',
            spriteDefinitions:{
                click:{ start: 4.6, duration:0.2},
                noise:{ start: 0, duration: 3.3}
            }
        });
})();
