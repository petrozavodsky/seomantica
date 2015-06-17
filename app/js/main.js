var $ = jQuery.noConflict();
$(document).ready(function () {
    $("[href='#request']").fancybox({
        type: 'ajax',
        padding: 54,
        width: 420,
    });


    $('.clients__items').carouFredSel({
        prev: '.clients__slider .clients__slider-arrow-left',
        next: '.clients__slider .clients__slider-arrow-right',
        width: '100%',
        items: 4,
        scroll:{
            items:1,
            fx: 'crossfade',
        }
    });


});