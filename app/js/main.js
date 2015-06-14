var $ = jQuery.noConflict();
$(document).ready(function () {
    $("[href='#request']").fancybox({
        type: 'ajax',
        padding: 54,
        width:420,
    });


});