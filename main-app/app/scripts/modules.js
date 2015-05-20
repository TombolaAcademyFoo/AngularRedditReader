(function(){
    'use strict';
    angular.module('Tombola.Reddit.Directives',[]);
    angular.module('Tombola.Reddit.Filters',[]);
    angular.module('Tombola.Reddit.Proxy',[]);
    angular.module('Tombola.Reddit.Audio',[]);
    angular.module('Tombola.Reddit.Model',['Tombola.Reddit.Proxy', 'Tombola.Reddit.Audio']);
    angular.module('Tombola.Reddit',['Tombola.Reddit.Model', 'Tombola.Reddit.Directives', 'Tombola.Reddit.Filters']);
}());