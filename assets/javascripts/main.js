

$( document ).ready(function() {

    $('body').addClass('show');
    $('.screen-control a').click(function () {
        $('.screen-control a').removeClass('act');
        $(this).addClass('act');
        $('.Interact .item').removeClass('act');
        $('.Interact .item'+$(this).attr('data-id')).addClass('act');
        return false;
    })

    $('.clients .next').click(function () {
        $('.clients-slide .text').hide();
        $('.clients-slide .text'+$(this).attr('data-id')).fadeIn();
        $('.clients-slide .item').hide();
        $('.clients-slide .item'+$(this).attr('data-id')).fadeIn();
        return false;
    })

    if($(window).width()>930) {
        loopImg($('.col1'), 5000);
        loopImg($('.col2'), 7000);
        loopImg($('.col3'), 9000);
    }
    // let helfHeight = $(window).height()/2;
    // let helfWidth = $(window).width()/2;
    // let heightPercent = $(window).height()/100;
    // let widthPercent = $(window).width()/100;
    //
    // $( "body" ).mousemove(function( event ) {
    //     let positionX = ((event.pageX - helfWidth)/widthPercent) *-1;
    //     let positionY = (((event.pageY -  $(window).scrollTop()) - helfHeight)/heightPercent) * -1;
    //     // console.log(event.pageY);
    //     $('.paral1').css('transform', 'translate3d('+ positionX/30 +'%,'+ positionY/30 +'%,0)');
    //     $('.paral2').css('transform', 'translate3d('+ positionX/8 +'%,'+ positionY/8 +'%,0)');
    //     $('.paral3').css('transform', 'translate3d('+ positionX/6 +'%,'+ positionY/6 +'%,0)');
    // });

    var lastScrollTop = 0;
    var xScrollPosition;
    var yScrollPosition;

    var paral1 = $('.paral1');
    var paral2 = $('.paral2');
    var paral3 = $('.paral3');

    var paral4 = $('.paral4');

    $(window).scroll(function(event){
        var st = $(this).scrollTop();
        xScrollPosition = window.scrollX;
        yScrollPosition = window.scrollY;

        if (st > lastScrollTop){
            $('.header').addClass('hide');
            $('.mob-open-menu ').removeClass('open');
        } else {
            if(st==0){
                $('.header').removeClass('hide')
            }
        }
        lastScrollTop = st;

        $('.features .item').filter(function () {
            if ($(this).visible(true)) {
                $(this).addClass('show');
                var dif = yScrollPosition-$(this)[0].offsetTop;
                // var paral1 = $(this).find('.paral1');
                var paral2 = $(this).find('.paral2');
                var paral3 = $(this).find('.paral3');
                var paral4 = $(this).find('.paral4');

                // setTranslate(0, dif * -0.015, paral1);
                setTranslate(0, dif * -0.1, paral2);
                setTranslate(0, dif * -0.1, paral3);
                setTranslate(0, dif * -0.05, paral4);
            } else {
                // The element is NOT visible, do something else
            }
        })
    });

    $('.select').click(function () {
        $(this).toggleClass('act');
    })

    $('.select-popup').click(function (e) {
        e.stopPropagation();
    });

    $('.select-popup a').click(function () {
        var item = $(this).closest('.select');
        item.find('input').val($(this).attr('href'));
        item.find('.selected').html($(this).html());
        item.removeClass('act')
       return false;
    });

    $('.js-open-contact').click(function () {
        $('.popup-contact').addClass('show');
        return false;
    });
    $('.js-open-popup-login').click(function () {
        $('.popup-login').addClass('show');
        return false;
    });

    $('.popup .inner').click(function (e) {
        e.stopPropagation();
    })

    $('.popup .close').click(function (e) {
        $('.popup').removeClass('show');
        return false;
    })

    $('.recovery-pass').click(function () {
       $('.sms').show();
        $('.phone').hide();
        return false;
    });

    $('.mob-open-menu').click(function () {
        $(this).toggleClass('open')
        return false;
    })

});

function setTranslate(xPos, yPos, el) {
    el.css("transform", "translate3d(" + xPos + ", " + yPos + "%, 0)");
}




function loopImg(item, time){
    var $first = item.find('.item:first-child');
    $first.animate({
        'marginTop': '-='+ parseInt($first.outerHeight(true)) +'px'
    }, time, 'linear', function(){
        $first.clone().removeAttr('style').appendTo($first.parent());
        $first.remove();
        loopImg(item, time);

    });
}


var controller = new ScrollMagic.Controller();

$(function () { // wait for document ready
    // build tween
    var tween = new TimelineMax ()
        .add([
            TweenMax.to("#parallaxContainer .layer1", 1, {x:'54%', y:'-60%', ease: Linear.easeNone})
        ]);

    var left1_hide = new TimelineMax ()
        .add([
            TweenMax.to("#parallaxContainer .left1", 1, {y:'50', opacity:0, ease: Linear.easeNone})
        ]);

    var left2_show = new TimelineMax ()
        .add([
            TweenMax.to("#parallaxContainer .left2", 1, {y:'0', opacity:1, ease: Linear.easeNone})
        ]);

    var left2_hide = new TimelineMax ()
        .add([
            TweenMax.to("#parallaxContainer .left2", 1, {y:'50', opacity:0, ease: Linear.easeNone}),
        ]);

    var left3_show = new TimelineMax ()
        .add([
            TweenMax.to("#parallaxContainer .left3", 1, {y:'0', opacity:1, ease: Linear.easeNone})
        ]);


    // build scene
    if($(window).width()>930) {
        var scene = new ScrollMagic.Scene({triggerElement: "#parallaxContainer", duration: 2000, offset: 450})
            .setTween(tween)
            .setPin("#parallaxContainer")
            // .addIndicators() // add indicators (requires plugin)
            .addTo(controller);

        new ScrollMagic.Scene({triggerElement: "#parallaxContainer", duration: 300, offset: 600})
            .setTween(left1_hide)
            .addTo(controller);

        new ScrollMagic.Scene({triggerElement: "#parallaxContainer", duration: 300, offset: 1000})
            .setTween(left2_show)
            .addTo(controller);


        new ScrollMagic.Scene({triggerElement: "#parallaxContainer", duration: 300, offset: 1700})
            .setTween(left2_hide)
            .addTo(controller);

        new ScrollMagic.Scene({triggerElement: "#parallaxContainer", duration: 300, offset: 2000})
            .setTween(left3_show)
            .addTo(controller);

    }
});

