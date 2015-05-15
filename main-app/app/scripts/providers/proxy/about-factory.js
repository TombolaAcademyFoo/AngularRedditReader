
(function () {
    'use strict';
    angular.module('Tombola.Reddit.Proxy')
        .service('AboutFactory', function(){
            return function(data){
                var about = data.data;
                return{
                        name: about.display_name,
                        headerImage: about.header_img,
                        headerTitle: about.header_title,
                        descriptionHtml: about.description_html,
                        title: about.title,
                        url: about.url
                };
            };
        });
})();