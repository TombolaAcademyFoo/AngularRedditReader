
(function () {
    'use strict';
    angular.module('Tombola.Reddit.Model')
        .factory('RedditModel',['$q', 'Proxy', function($q, proxy){
            var RedditModel = function() {
                var me = this;
                this.subReddit = 'gaming';
                this.posts =[];
                this.about ={};

                var getPosts = function(){
                    return proxy.getPosts(me.subReddit);
                };

                var getAbout = function(){
                    return proxy.getAbout(me.subReddit);
                };

                this.reload = function(){
                    $q.all([getPosts(), getAbout()]).
                    then(function(results){
                        me.posts = results[0];
                        me.about = results[1];
                    })
                    .catch(function(message){
                        alert(message);
                    });




                };
            };

            return new RedditModel();

        }]);
})();