window.onload = function() {
    $(document).ready(function () {
        $('.slider').bxSlider( {
            auto: true,
            minSlides: 1,
            maxSlides: 1,
            captions: false,
            mode: 'fade',
            speed: 5000,
            infiniteLoop: true,
            preloadImages: 'visible',
            keyboardEnabled: true,
            randomStart: true,
            pager: false,
            controls: false
        });
    });
};