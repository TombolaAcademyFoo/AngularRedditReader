(function () {
    'use strict';
    angular.module('Tombola.Reddit.Directives')
        .directive('redditPost', function() {
            return {
                restrict: 'E',
                replace: false,
                template: '<div class="post"><img src="{{model.thumbnail}}"/>' +
                '<div class="mainpost">' +
                '<div><span class="author">{{model.author}}</span> - <span class="date">{{model.created * 1000 | date : "dd MMM yyyy HH:mm:ss" : true}}</span></div>' +
                '<a class="title" href="{{model.url}}" target="_blank">{{model.title | uppercase}}</a></div></div>'

            };
    });
})();

