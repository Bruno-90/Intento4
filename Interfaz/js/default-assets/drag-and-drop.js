(function ($) {
    "use strict";

    // Dragula
    $(function () {
        dragula([$('#dragula-left-side-content')[0], $('#dragula-right-side-content')[0]], {
            copy: true
        });

        // Drag handle
        dragula([$('#dragula-left-drag-handles')[0], $('#dragula-right-drag-handles')[0]], {
            moves: function (el, container, handle) {
                return handle.classList.contains('handle');
            }
        });
    });

})(jQuery);