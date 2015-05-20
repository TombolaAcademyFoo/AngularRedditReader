(function(){
    'use strict';
    angular.module('Tombola.Reddit')
        .controller('RedditController', [ '$scope', 'RedditModel','RedditSounds', function($scope, redditModel, redditSounds){
            $scope.model = redditModel;
            $scope.reload = function(){
                redditSounds.playClick();
                redditModel.reload(false);
            };
            redditModel.reload(true);
        }]);
}());