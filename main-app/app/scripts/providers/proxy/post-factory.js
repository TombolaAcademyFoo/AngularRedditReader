
(function () {
    'use strict';
    angular.module('Tombola.Reddit.Proxy')
        .service('PostFactory', function(){
            return function(data){
                var posts = data.data.children;
                var results = [];
                for(var i =0; i < posts.length; i++){
                    var post = posts[i].data;
                    results.push({
                        author: post.author,
                        created: post.created,
                        url: post.url,
                        title: post.title,
                        thumbnail: post.thumbnail ? post.thumbnail : ''
                    });
                }
                return results;
            };
        });
})();