(function ($) {
    "use strict";
    
    if ($.fn.summernote) {
        $('#composeMailSummernote').summernote({
            placeholder: 'Write your mail',
            tabsize: 2,
            height: 400
        });
    }
    if ($.fn.summernote) {
        $('#summernote2').summernote({
            placeholder: 'Hello World!',
            tabsize: 1,
            height: 600
        });
    }

})(jQuery);