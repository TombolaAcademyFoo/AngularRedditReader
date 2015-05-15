(function () {
    'use strict';
    describe('reddit-model tests',function(){
        var redditModel;

        beforeEach(module('Tombola.Reddit.Model'));

        beforeEach(inject(function($injector){
            redditModel = $injector.get('RedditModel');
        }));

        it.skip('TODO', function(){

        });
    });
})();