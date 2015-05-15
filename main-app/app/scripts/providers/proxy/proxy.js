
(function () {
    'use strict';
    angular.module('Tombola.Reddit.Proxy')
        .factory('Proxy', ['$http', '$q', 'proxyConstants','PostFactory', 'AboutFactory', function($http, $q, proxyConstants,postFactory, aboutFactory){
            var RedditProxy = function() {
                var me = this;

                var makeCall = function (url, updateCallback){
                    var deferred = $q.defer();
                    $http.get(url)
                        .success(function(data){
                            deferred.resolve(updateCallback(data));
                        })
                        .catch(function(){
                            deferred.reject("Proxy Error");
                        });
                    return deferred.promise;
                };

                this.getPosts = function (subreddit){
                    return makeCall(proxyConstants.defaultUrl + subreddit + ".json", postFactory);
                };

                this.getAbout = function (subreddit){
                    return makeCall(proxyConstants.defaultUrl + subreddit + "/about.json", aboutFactory);
                };
            };

            return new RedditProxy();
        }]);
})();