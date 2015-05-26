
(function () {
    'use strict';
    angular.module('Tombola.Reddit.Model')
        .factory('RedditModel',['$q', 'Proxy', function($q, proxy){
            var RedditModel = function() {
                var me = this,
                    getPosts = function(){
                        return proxy.getPosts(me.subReddit);
                    },
                    getAbout = function(){
                        return proxy.getAbout(me.subReddit);
                    };


                this.subReddit = 'gaming';
                this.autoUpdate = true;
                this.posts =[];
                this.about ={ headerImage:''};

                this.update = function(){
                    $q.all([getPosts(), getAbout()]).
                    then(function(results){
                        me.posts = results[0];
                        me.about = results[1];
                    })
                    .catch(function(message){
                        alert(message); //Really, shouldn't do this - not testable for starters + poor way of reporting errors.
                    });
                };

                this.autoUpdateChanged = function (){
                    if(this.autoUpdate){
                        //TODO: Check the current timeout state, if not set, setup
                    }
                    else{
                        //TODO: Check the current timeout state, if not set - cancel
                    }
                };

            };
            return new RedditModel();
        }]);
})();