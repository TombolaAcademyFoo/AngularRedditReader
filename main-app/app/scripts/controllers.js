(function(){
    'use strict';
    angular.module('Tombola.Reddit')
        .controller('RedditController', [ '$scope', 'RedditModel', function($scope, redditModel){
            $scope.model = redditModel;
            $scope.reload = function(){
                redditModel.reload();
            };

            $scope.reload();
        }]);
}());