
(function () {
    'use strict';

    //This isn't how the JS team do it exactly - a simplified alternative more suitable to a smaller project.
    var mocks = {
        proxy: { },
        audioConstants: { sourceUrl: 'someurl',
            sourceType:'type',
            spriteDefinitions:{
                click:{ start: 0, duration:1},
                noise:{ start: 2, duration: 3}
            }},
        audioSprite : {
            createAudioNode: function (sourceUrl, type) {},
            play: function (start, duration) {}
        }
    };
    window.mocks = mocks; //Make available within the window scoper - better than global

})();