(function () {
    'use strict';
    describe('reddit-sounds tests',function(){
        var redditSounds,
            audioSpriteMock;

        beforeEach(module('Tombola.Reddit.Audio'));

        beforeEach(module(function($provide){
            $provide.constant('AudioConstants', mocks.audioConstants);
            $provide.value('AudioSprite', mocks.audioSprite);
            audioSpriteMock = sinon.sandbox.mock(mocks.audioSprite);

            // Done at initialisation, so need to set the expectation up
            // before it is initialised.
            audioSpriteMock
                .expects('createAudioNode')
                .withArgs(mocks.audioConstants.sourceUrl,mocks.audioConstants.sourceType)
                .once();
        }));

        beforeEach(inject(function($injector){
            redditSounds = $injector.get('RedditSounds');
        }));

        it('playClick', function(){
            audioSpriteMock
                .expects('play')
                .withArgs(mocks.audioConstants.spriteDefinitions.click.start,mocks.audioConstants.spriteDefinitions.click.duration)
                .once();
            redditSounds.playClick();
        });

        it('playNoise', function(){
            audioSpriteMock
                .expects('play')
                .withArgs(mocks.audioConstants.spriteDefinitions.noise.start,mocks.audioConstants.spriteDefinitions.noise.duration)
                .once();
            redditSounds.playNoise();
        })

        afterEach(function(){
            audioSpriteMock.verify();
            sinon.sandbox.restore();
        });
    });
})();