(function ($) {
    "use strict";

    $('.animation-toggle').hover(function () {
        var anim = $(this).attr('data-animate');
        $(this).addClass('animated');
        $(this).addClass(anim);
        setTimeout(function () {
            $('.animation-toggle').removeClass(anim);
        }, 2000);
    });

})(jQuery);