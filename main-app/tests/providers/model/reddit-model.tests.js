(function () {
    'use strict';
    describe('reddit-model tests',function(){
        var redditModel,
            $q,
            $rootScope;

        beforeEach(module('Tombola.Reddit.Model'));

        beforeEach(module(function($provide){
            $provide.value('Proxy', mocks.proxy);
        }));

        beforeEach(inject(function($injector, _$rootScope_, _$q_){
            redditModel = $injector.get('RedditModel');
            $q = _$q_;
            $rootScope = _$rootScope_;
        }));

        describe('Defaults are set', function(){
            it('subreddit defaults to gaming', function(){
                redditModel.subReddit.should.equal('gaming');
            });
            it('posts defaults to empty array', function(){
                redditModel.posts.should.deep.equal([]);
            });
            it('about defaults to empty object', function(){
                redditModel.about.should.deep.equal({});
            });
        });

        describe('reload function', function(){
            //In a real test you'd want real-like responses
            var postResponse = ['test'],
                aboutResponse = {foo:'bar'},
                postDeferred,
                aboutDeferred;

            beforeEach(function(){
                postDeferred = $q.defer();
                aboutDeferred = $q.defer();
                ////Set the proxy to return the promise.
                mocks.proxy.getPosts = function(){
                    return postDeferred.promise;
                };

                mocks.proxy.getAbout = function(){
                    return aboutDeferred.promise;
                };
            });

            it('nothing changes when nothing is resolved', function(){
                redditModel.update();
                redditModel.posts.should.deep.equal([]);
                redditModel.about.should.deep.equal({});
            });

            // On principle is not to test the framework - it looks like the following two tests check .all,
            // but in reality I want to make sure I've waited for both rather than waited for either

            it('not updated when only post promise resolved', function(){
                redditModel.update();
                postDeferred.resolve(postResponse);
                $rootScope.$apply(); //This forces the resolve to finish https://docs.angularjs.org/api/ng/service/$q#differences-between-kris-kowal-s-q-and-q
                redditModel.posts.should.deep.equal([]);
                redditModel.about.should.deep.equal({});
            });

            it('not updated when only about promise resolved', function(){
                redditModel.update();
                aboutDeferred.resolve(aboutResponse);
                $rootScope.$apply(); //This forces the resolve to finish https://docs.angularjs.org/api/ng/service/$q#differences-between-kris-kowal-s-q-and-q
                redditModel.posts.should.deep.equal([]);
                redditModel.about.should.deep.equal({});
            });

            it('updated when both promisies resolved', function(){
                redditModel.update();
                postDeferred.resolve(postResponse);
                aboutDeferred.resolve(aboutResponse);
                $rootScope.$apply(); //This forces the resolve to finish https://docs.angularjs.org/api/ng/service/$q#differences-between-kris-kowal-s-q-and-q
                redditModel.posts.should.deep.equal(postResponse);
                redditModel.about.should.deep.equal(aboutResponse);
            });
        });
    });
})();