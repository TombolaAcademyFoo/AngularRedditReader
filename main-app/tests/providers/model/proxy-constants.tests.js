(function () {
    'use strict';
    describe('proxy-constant tests',function(){
        var proxyConstants;

        beforeEach(module('Tombola.Reddit.Proxy'));

        beforeEach(inject(function($injector){
            proxyConstants = $injector.get('proxyConstants');
        }));

        it('defaultUrl Points to correct place', function(){
            proxyConstants.defaultUrl.should.equal('http://www.reddit.com/r/');
        });
    });

})();