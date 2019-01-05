
$(document).ready(function () {
    "use strict";



    //------- Slider  js --------//  

    $('.slider-img').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        prevArrow: false,
        nextArrow: false
    });


    //------- Mobile Nav  js --------//  

    if ($('#nav-menu-container').length) {
        var $mobile_nav = $('#nav-menu-container').clone().prop({
            id: 'mobile-nav'
        });
        $mobile_nav.find('> ul').attr({
            'class': '',
            'id': ''
        });
        $('body').append($mobile_nav);
        $('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="lnr lnr-menu"></i></button>');
        $('body').append('<div id="mobile-body-overly"></div>');
        $('#mobile-nav').find('.menu-has-children').prepend('<i class="lnr lnr-chevron-down"></i>');

        $(document).on('click', '.menu-has-children i', function (e) {
            $(this).next().toggleClass('menu-item-active');
            $(this).nextAll('ul').eq(0).slideToggle();
            $(this).toggleClass("lnr-chevron-up lnr-chevron-down");
        });

        $(document).on('click', '#mobile-nav-toggle', function (e) {
            $('body').toggleClass('mobile-nav-active');
            $('#mobile-nav-toggle i').toggleClass('lnr-cross lnr-menu');
            $('#mobile-body-overly').toggle();
        });

        $(document).on('click', function (e) {
            var container = $("#mobile-nav, #mobile-nav-toggle");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                if ($('body').hasClass('mobile-nav-active')) {
                    $('body').removeClass('mobile-nav-active');
                    $('#mobile-nav-toggle i').toggleClass('lnr-cross lnr-menu');
                    $('#mobile-body-overly').fadeOut();
                }
            }
        });
    } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
        $("#mobile-nav, #mobile-nav-toggle").hide();
    }
    $("#mobile-nav li a").on('click', function (e) {
        $("body.mobile-nav-active #mobile-nav").addClass("close-menu");
        $('body').removeClass('mobile-nav-active');
        $('#mobile-nav-toggle i').toggleClass('lnr-cross lnr-menu');
        $('#mobile-body-overly').fadeOut();

    });
    //------- Header Scroll Class  js --------//  

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#header').addClass('header-scrolled');
        } else {
            $('#header').removeClass('header-scrolled');
        }
    });


    //------- Tab  js --------//  
    $('.nav-tab ul li').click(function () {
        var tab_id = $(this).attr('data-tab');
        $('.nav-tab ul li').removeClass('active');
        $('.tab-content').removeClass('active');
        $(this).addClass('active');
        $("#" + tab_id).addClass('active');
    })

    //------- Scroll smooth  js --------// 
    $(function () {
        $('a[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top - 90
                    }, 1000);
                    return false;
                }
            }
        });
    });

    //------- Validation form  js --------// 
    $(".single-input").keyup(function () {

        if ($(this).val() == "") {
            $(this).css("background", "#f3f3f3");
        } else {
            console.log("oke");
            $(this).css("background", "white");
        }
    });

    //------- Moaldal  js --------// 
    $("#myModal").modal('show');

    //------- Show/hile content  js --------// 

    var showChar = 100;  // How many characters are shown by default
    var showChar1 = 750 ; 
    var ellipsestext = "...";
    var moretext = "read more >";
    var lesstext = "read less";


    $('.more').each(function () {
        var content = $(this).html();
        if (content.length > showChar) {

            var c = content.substr(0, showChar);
            var h = content.substr(showChar);
            var html = c + '<span class="moreellipses">' + ellipsestext + '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';
            $(this).html(html);
        }
    });


    $('.more-1').each(function () {
        var content = $(this).html();
        if (content.length > showChar1) {

            var c = content.substr(0, showChar1);
            var h = content.substr(showChar1);
            var html = c + '<span class="moreellipses">' + ellipsestext + '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';
            $(this).html(html);
        }
    });

    $(".morelink").click(function () {
        if ($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });

    // ===== Scroll to Top ==== 
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 50) {
            $('#return-to-top').fadeIn(200);
        } else {
            $('#return-to-top').fadeOut(200);
        }
    });
    $('#return-to-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
    });


});