(function () {
    'use strict';

    angular.module('Tombola.Reddit.Audio')
        .service('RedditSounds',['AudioSprite', function(audioSprite){
            audioSprite.createAudioNode('sounds/reddit-sprite.mp3');

            this.playClick = function(){
                audioSprite.play(4.6, 0.2);
            };

            this.playNoise = function(){
                audioSprite.play(0, 3.3);
            };
        }]);
})();