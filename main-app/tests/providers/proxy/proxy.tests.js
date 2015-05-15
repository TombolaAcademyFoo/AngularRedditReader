(function () {
    'use strict';
    describe.skip('proxy tests',function(){
        var proxy;

        beforeEach(module('Tombola.Reddit.Proxy'));

        beforeEach(inject(function($injector){
            proxy= $injector.get('proxy');
        }));

        it.skip('TODO', function(){

        });
    });
})();