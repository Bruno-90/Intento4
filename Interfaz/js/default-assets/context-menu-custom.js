(function ($) {
    "use strict";

    var menu = [{
        name: 'create',
        img: 'img/core-img/1.png',
        title: 'Create New'
    }, {
        name: 'update',
        img: 'img/core-img/2.png',
        title: 'Update Now'
    }, {
        name: 'delete',
        img: 'img/core-img/3.png',
        title: 'Delete Now'
    }];

    //Calling context menu
    $('.testButton').contextMenu(menu);

    var menu = [{
        name: 'create',
        img: 'img/core-img/1.png',
        title: 'Create New'
    }, {
        name: 'update',
        img: 'img/core-img/2.png',
        title: 'Update Now',
        subMenu: [{
            name: 'merge',
            title: 'It will merge row',
            img: 'img/core-img/1.png'
        }, {
            name: 'replace',
            title: 'It will replace row',
            img: 'img/core-img/3.png',
            subMenu: [{
                name: 'replace top 100',
                img: 'img/core-img/2.png'
            }, {
                name: 'replace all',
                img: 'img/core-img/2.png'
            }]
        }]
    }, {
        name: 'delete',
        img: 'img/core-img/1.png',
        title: 'Delete Now',
        subMenu: [{
            'name': 'soft delete',
            img: 'img/core-img/2.png'
        }, {
            'name': 'hard delete',
            img: 'img/core-img/3.png'
        }]

    }];

    //Calling context menu
    $('.testButton2').contextMenu(menu);

    $('.validate').each(function () {
        elm = $(this);
        elm.contextMenu(elm.siblings('.valTip'), {
            'triggerOn': 'focusin',
            'displayAround': 'trigger'
        });
    });

    $('.validate').focusout(function (e) {
        $(this).siblings('.valTip').css('display', 'none');
    });

})(jQuery);