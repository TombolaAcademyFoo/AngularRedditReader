(function () {
    'use strict';
    describe('proxy-constant tests',function(){
        var audioConstants;

        beforeEach(module('Tombola.Reddit.Audio'));

        beforeEach(inject(function($injector){
            audioConstants = $injector.get('AudioConstants');
        }));

        it('defaultUrl Points to correct place', function(){
            audioConstants.sourceUrl.should.equal('sounds/reddit-sprite.mp3');
        });

        it('defaultUrl Points to correct place', function(){
            audioConstants.sourceType.should.equal('audio/mp3');
        });

        describe('spriteDefinitions',function(){
            it('click constants OK', function(){
                audioConstants.spriteDefinitions.click.start.should.equal(4.6);
                audioConstants.spriteDefinitions.click.duration.should.equal(0.2);
            });
            it('noise constants OK', function(){
                audioConstants.spriteDefinitions.noise.start.should.equal(0);
                audioConstants.spriteDefinitions.noise.duration.should.equal(3.3);
            });
        });
    });
})();