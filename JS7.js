var document;
var window;
var alert;
var console;
var $;
$(document).ready(function () {
    $(".slider").slick({
        arrows: true,
        dots: true,
        responsive: [
            {
                breakpoint: 750,
                settings: {
                  slidesToScroll: 1,
                    slidesToShow: 2
                }
            }
        ],
        slidesToScroll: 1,
        slidesToShow: 4,
        waitForAnimate: false
    });
});
