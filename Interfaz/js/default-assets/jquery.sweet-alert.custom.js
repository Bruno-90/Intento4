! function ($) {
    "use strict";

    var SweetAlert = function () {};

    //examples 
    SweetAlert.prototype.init = function () {

            //Basic
            $('#sa-basic').click(function () {
                swal("Simple, Text Meesage!");
            });

            //A title with a text under
            $('#sa-title').click(function () {
                swal("Here's a message!", "Lorem ipsum dolor sit amet.")
            });

            //Success Message
            $('#sa-success').click(function () {
                swal("Good job!", "You clicked the button!", "success")
            });

            //Warning Message
            $('#sa-warning').click(function () {
                swal({
                    title: "Are you sure?",
                    text: "You will not be able to recover this imaginary file!",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#DD6B55",
                    confirmButtonText: "Yes, delete it!",
                    closeOnConfirm: false
                }, function () {
                    swal("Deleted!", "Your imaginary file has been deleted.", "success");
                });
            });

            //Parameter
            $('#sa-params').click(function () {
                swal({
                    title: "Are you sure?",
                    text: "You will not be able to recover this imaginary file!",
                    type: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#DD6B55",
                    confirmButtonText: "Yes, delete it!",
                    cancelButtonText: "No, cancel plx!",
                    closeOnConfirm: false,
                    closeOnCancel: false
                }, function (isConfirm) {
                    if (isConfirm) {
                        swal("Deleted!", "Your imaginary file has been deleted.", "success");
                    } else {
                        swal("Cancelled", "Your imaginary file is safe :)", "error");
                    }
                });
            });

            //Custom Image
            $('#sa-image').click(function () {
                swal({
                    imageUrl: 'https://unsplash.it/400/200',
                    imageWidth: 400,
                    imageHeight: 200,
                    imageAlt: 'Custom image',
                    title: "Hello World!",
                    text: "Recently joined twitter",
                });
            });

            //Auto Close Timer
            $('#sa-close').click(function () {
                swal({
                    title: "Auto close alert!",
                    text: "I will close in 3 seconds.",
                    timer: 3000,
                    showConfirmButton: false
                });
            });

        },
        //init
        $.SweetAlert = new SweetAlert, $.SweetAlert.Constructor = SweetAlert

}(window.jQuery),

//initializing 
function ($) {
    "use strict";
    $.SweetAlert.init()

}(window.jQuery);