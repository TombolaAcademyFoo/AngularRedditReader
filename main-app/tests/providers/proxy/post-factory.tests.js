(function () {
    'use strict';
    describe('post-factory tests',function(){
        var postFactory;

        beforeEach(module('Tombola.Reddit.Proxy'));

        beforeEach(inject(function($injector){
            postFactory = $injector.get('PostFactory');
        }));

        it('about factory sets correctly', function(){
            var fakeData = {
                data:{
                    children:[
                        {data:{ author:'auth1', created:'creat1', url:'url1', title:'title1', thumbnail:'thumbnail1'}},
                        {data:{ author:'auth2', created:'creat2', url:'url2', title:'title2'}}
                    ]
                }};

            var result = postFactory(fakeData);
            result.length.should.equal(fakeData.data.children.length);
            result[0].author.should.equal(fakeData.data.children[0].data.author);
            result[0].created.should.equal(fakeData.data.children[0].data.created);
            result[0].url.should.equal(fakeData.data.children[0].data.url);
            result[0].title.should.equal(fakeData.data.children[0].data.title);
            result[0].thumbnail.should.equal(fakeData.data.children[0].data.thumbnail);
            result[1].thumbnail.should.equal('');
        });
    });
})();