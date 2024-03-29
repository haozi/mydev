require([
    '../../amd_modules/widget/Tab',
    // '../../amd_modules/widget/Pin',
    '../../amd_modules/Share/Share',
    '../../amd_modules/Scroll/Scroll'
], function (Tab, Share, Scroll) {
    $('.tab').each(function () {
        new Tab({
            element: this,
            eventTrigger: 'mouseenter'
        });
    });

    // gotop
    var $pinHtml = $(
    '<div class="pin" id="pin" bk>' +
        '<a href="#xb" class="pin-nxbxk">逆袭必修课</a>' +
        '<a href="#nxmj"  class="pin-nxmj">逆袭秘籍</a>' +
        '<a href="#mszl"  class="pin-mszl">名师指路</a>' +
        '<a href="#share" class="pin-zfyl">转发有礼</a>' +
        '<a href="#top"   class="pin-gotop">回顶部</a>' +
    '</div>'
    );
    $('body').append($pinHtml);
    var $document = $(document);
    var $window = $(window);
    var winWidth = $(window).width();
    var winHeight = $(window).height();
    $(window).on('scroll', function () {
        if($document.scrollTop() > 533){
            $pinHtml.addClass('fixed');
        } else {
            $pinHtml.removeClass('fixed');
        }
    }).trigger('scroll');


    // 分享
    new Share({
        element: '.weibo',
        share: {
            summary : _share.summary,
            url     : _share.url,
            tags    : _share.tags,
            pics    : _share.pics
        }
    });

    var srcoll = new Scroll();
    $pinHtml.on('click', 'a', function () {
        srcoll.toEl($(this).attr('href'));
    });
    $('.pin-gotop').click(function() {
        pin.hide(500);
    });
    $('.share').click(function() {
        srcoll.toEl('#share')
    });


    // nav hover
    var $navA = $('.nav li a'),
        iIdx = $('.nav li').has('.current').index();
    $('.nav li a').hover(function () {
        var $this = $(this);
        $navA.removeClass('current')
    }, function () {
        $navA.eq(iIdx).addClass('current')
    });

    if($('body').attr('id') === 'nZxx') {
        $('.tab2').each(function () {
            new Tab({
                element: this,
                eventTrigger: 'mouseenter',
                carCtrl: '.tab2-ctrl',
                carCtrlItem: '.tab2-ctrl-item',
                carCtrlItemCurrentCls: 'current2',

                carCont: '.tab2-cont',
                carContItem: '.tab2-cont-item',
                carContItemCurrentCls: 'current2'

            });
        });
    }

    // 外链
    $(document).on('click', 'a', function () {
        var host = document.location.host;
        var href = $(this).attr('href');
        if(href.indexOf(host) < 0 && /^http/.test(href)) {
            window.open(href);
            return false;
        }
    });
});