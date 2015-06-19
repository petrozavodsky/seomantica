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
        scroll: {
            items: 1,
            fx: 'crossfade',
        }
    });

    if ($("#map").length) {

        ymaps.ready(init);
        function init() {
            var myMap = new ymaps.Map("map", {
                    center: [45.04813364, 38.97383567],
                    zoom: 13,
                    controls: ['zoomControl']
                }),
                myPlacemark = new ymaps.Placemark(myMap.getCenter(), {hintContent: 'Seomantika, продвижение сайтов'}, {
                    iconLayout: 'default#image',
                    iconImageHref: $("#map").attr('data-img'),
                    iconImageSize: [88, 97],
                    iconImageOffset: [-44, -97]
                });

            myMap.behaviors.disable(['scrollZoom']);
            myMap.geoObjects.add(myPlacemark);
        }

    }

});