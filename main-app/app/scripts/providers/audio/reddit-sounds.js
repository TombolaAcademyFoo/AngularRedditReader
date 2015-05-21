(function () {
    'use strict';

    angular.module('Tombola.Reddit.Audio')
        .service('RedditSounds',['AudioConstants', 'AudioSprite', function(audioConstants, audioSprite){

            var playSound = function (spriteDefinition){
                audioSprite.play(spriteDefinition.start, spriteDefinition.duration);
            };

            this.playClick = function(){
                playSound(audioConstants.spriteDefinitions.click);
            };

            this.playNoise = function(){
                playSound(audioConstants.spriteDefinitions.noise);
            };

            audioSprite.createAudioNode(audioConstants.sourceUrl, audioConstants.sourceType);
        }]);
})();