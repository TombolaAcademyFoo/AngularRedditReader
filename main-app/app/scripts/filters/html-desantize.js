(function () {
    'use strict';
    angular.module('Tombola.Reddit.Filters')
        .filter('htmlDesanitize', ['$sce', function($sce){
            //There are probably better ways to do this...

            var replaceAll = function(str, find, replace) {
                return str.replace(new RegExp(find, 'g'), replace);
            };

            return function(santizedHtml) {
                if(!santizedHtml) {
                    return santizedHtml;
                }


                santizedHtml = replaceAll(santizedHtml, '&lt;', '<');
                santizedHtml = replaceAll(santizedHtml, '&gt;', '>');
                santizedHtml = replaceAll(santizedHtml, '&amp;', '&');
                return $sce.trustAsHtml(santizedHtml);
            };
        }]);
})();