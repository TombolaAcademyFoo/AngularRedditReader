(function () {
    'use strict';
    describe('reddit-model tests',function(){
        var redditModel;

        beforeEach(module('Tombola.Reddit.Model'));

        beforeEach(module(function($provide){
            $provide.value('Proxy', mocks.proxy);
        }));

        beforeEach(inject(function($injector){
            redditModel = $injector.get('RedditModel');
        }));

        describe('Defaults are set', function(){
            it('subreddit defaults to gaming', function(){
                redditModel.subReddit.should.equal('gaming')
            });
            it('posts defaults to empty array', function(){
                redditModel.posts.should.deep.equal([])
            });
            it('about defaults to empty object', function(){
                redditModel.about.should.deep.equal({})
            });
        });
    });
})();