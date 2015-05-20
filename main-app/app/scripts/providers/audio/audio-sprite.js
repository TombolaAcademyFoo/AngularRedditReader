
(function () {
    'use strict';
    angular.module('Tombola.Reddit.Audio')
        .service('AudioSprite',['$interval', '$document', function($interval, $document){

            var me = this,
                audioNode = null,
                intervalPromise = null,
                stopPlaying = function () {
                    if (audioNode) {
                        audioNode.pause();
                    }

                    if (intervalPromise) {
                        $interval.cancel(intervalPromise);
                        intervalPromise = null;
                    }
                };

            me.createAudioNode = function (sourceUrl) {
                var createAudioSource = function(){
                        var sourceNode = angular.element('<source>');
                        sourceNode.attr('src', sourceUrl);
                        sourceNode.attr('type', 'audio/mp3');
                        return sourceNode;
                    },
                angularAudioNode = angular.element('<audio>');
                angularAudioNode.attr('preload', 'auto');
                angularAudioNode.attr('src', sourceUrl);

                angularAudioNode.append(createAudioSource());
                $document.find('body').append(angularAudioNode);
                audioNode = angularAudioNode[0];
            };

            // There seems to be a bug in chrome (at least vs FF)
            // Hard reset plays the whole sprite first time,
            // then soft reset plays the sprite correcly - probably
            // somehing to do with caching and when the audio control
            // is ready. The Audio is far from mature & don't want to
            // spend lot of time fixing - the Games team audio is
            // way more complex and falls back to the web audio API
            // Not going to do this as this stuff, in principle works.
            this.play= function(start, duration){
                var  endTime = start + duration;
                stopPlaying();
                audioNode.currentTime = start;
                audioNode.play();

                intervalPromise = $interval(function(){
                    if(audioNode.currentTime >= endTime){
                        stopPlaying();
                    }
                }, 50);
            };
        }]);
})();