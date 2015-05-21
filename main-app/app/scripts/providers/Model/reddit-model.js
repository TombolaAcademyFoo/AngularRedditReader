
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
                this.posts =[];
                this.about ={};

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

            };
            return new RedditModel();
        }]);
})();