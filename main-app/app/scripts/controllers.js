(function(){
    'use strict';
    angular.module('Tombola.Reddit')
        .controller('RedditController', [ '$scope', 'RedditModel','RedditSounds', function($scope, redditModel, redditSounds){
            $scope.model = redditModel;
            $scope.update = function(){
                redditSounds.playClick();
                redditModel.update(false);
            };

            $scope.playNoise = function(){
                redditSounds.playNoise();
            };

            redditModel.update(true);
        }]);
}());