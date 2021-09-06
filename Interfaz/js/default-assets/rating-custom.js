(function () {
    "use strict";

    // [ rating-1to10 ]
    $('#rating-1to10').barrating('show', {
        theme: 'bars-1to10',
    });

    // [ rating-movie ]
    $('#rating-movie').barrating('show', {
        theme: 'bars-movie'
    });

    // [ rating-movie1 ]
    $('#rating-movie').barrating('set', 'Mediocre');

    // [ rating-square ]
    $('#rating-square').barrating('show', {
        theme: 'bars-square',
        showValues: true,
        showSelectedRating: false
    });

    // [ rating-pill ]
    $('#rating-pill').barrating('show', {
        theme: 'bars-pill',
        initialRating: 'A',
        showValues: true,
        showSelectedRating: false,
        allowEmpty: true,
        emptyValue: '-- no rating selected --',
        onSelect: function (value, text) {
            alert('Selected rating: ' + value);
        }
    });

    // [ rating-reverse ]
    $('#rating-reversed').barrating('show', {
        theme: 'bars-reversed',
        showSelectedRating: true,
        reverse: true
    });

    // [ rating-horizontal ]
    $('#rating-horizontal').barrating('show', {
        theme: 'bars-horizontal',
        reverse: true,
        hoverState: false
    });

    // [ rating-fontawesome ]
    $('#rating-fontawesome').barrating({
        theme: 'fontawesome-stars',
        showSelectedRating: false
    });

    // [ rating-bootstrap ]
    $('#rating-bootstrap').barrating({
        theme: 'bootstrap-stars',
        showSelectedRating: false
    });

    // [ rating-fontawesome-o ]
    var currentRating = $('#rating-fontawesome-o').data('current-rating');

    $('.stars-example-fontawesome-o .current-rating')
        .find('span')
        .html(currentRating);

    $('.stars-example-fontawesome-o .clear-rating').on('click', function (event) {
        event.preventDefault();
        $('#rating-fontawesome-o')
            .barrating('clear');
    });

    $('#rating-fontawesome-o').barrating({
        theme: 'fontawesome-stars-o',
        showSelectedRating: false,
        initialRating: currentRating,
        onSelect: function (value, text) {
            if (!value) {
                $('#example-fontawesome-o')
                    .barrating('clear');
            } else {
                $('.stars-example-fontawesome-o .current-rating')
                    .addClass('hidden');

                $('.stars-example-fontawesome-o .your-rating')
                    .removeClass('hidden')
                    .find('span')
                    .html(value);
            }
        },
        onClear: function (value, text) {
            $('.stars-example-fontawesome-o')
                .find('.current-rating')
                .removeClass('hidden')
                .end()
                .find('.your-rating')
                .addClass('hidden');
        }
    });

})();