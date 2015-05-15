(function () {
    'use strict';
    describe('about-factory tests',function(){
        var aboutFactory;

        beforeEach(module('Tombola.Reddit.Proxy'));

        beforeEach(inject(function($injector){
            aboutFactory = $injector.get('AboutFactory');
        }));

        it('about factory sets correctly', function(){
            var fakeResponse = {
                data:{
                    display_name:'result-name',
                    header_img: 'about-header-image',
                    header_title: 'about-header-title',
                    description_html: 'about-description',
                    title: 'about-title',
                    url: 'about-url'
            }};

            var result = aboutFactory(fakeResponse);
            result.name.should.equal('result-name');
            result.headerImage.should.equal('about-header-image');
            result.headerTitle.should.equal('about-header-title');
            result.descriptionHtml.should.equal('about-description');
            result.title.should.equal('about-title');
            result.url.should.equal('about-url');
        });
    });
})();