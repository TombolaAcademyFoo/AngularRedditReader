(function () {
    'use strict';
    describe('reddit-model tests',function(){
        var redditModel;
        var proxyMock;

        beforeEach(module('Tombola.Reddit.Model'));

        beforeEach(function(){
            proxySpy = sinon.mock()
        });


        beforeEach(inject(function($injector){
            redditModel = $injector.get('RedditModel');
        }));

        it('TODO', function(){

        });
    });
})();