(function ($) {
    "use strict";
    $(window).on('load', function () {
        $('#preloader').delay(1000).fadeOut('slow', function () {
            $(this).remove();
        });
        displayTab();
    });
    function displayTab() {
        var a = $(window).width();
     
        if (a < 700) {
            $('#myTab').removeClass('nav-tabs');
            $('#myTab').addClass('nav-stacked');
            $('#collapseExample').find('.card').addClass('newClass');
        }
        else {
            $('#myTab').addClass('nav-tabs');
            $('#myTab').removeClass('nav-stacked');
            $('#collapseExample').find('.card').removeClass('newClass');
        }
    }
    $(window).on("scroll", function () {
        activeMenuItem($(".nav-menu"));
    });
    $(window).resize(function () {
       
        displayTab();
    });

    function activeMenuItem($links) {
        var top = $(window).scrollTop(),
            windowHeight = $(window).height(),
            documentHeight = $(document).height(),
            cur_pos = top + 2,
            sections = $("section"),
            nav = $links,
            nav_height = nav.outerHeight(),
            home = nav.find(" > ul > li:first");
        sections.each(function () {
            
            var top = $(this).offset().top - nav_height - 40,
                bottom = top + $(this).outerHeight();

               
            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find("> ul > li > a").parent().removeClass("active");
                nav.find("a[href='#" + $(this).attr('id') + "']").parent().addClass("active");

            } else if (cur_pos === 2) {
                nav.find("> ul > li > a").parent().removeClass("active");
                home.addClass("active");
            } else if ($(window).scrollTop() + windowHeight > documentHeight ) {
                nav.find("> ul > li > a").parent().removeClass("active");
            }
        });
    }

    function smoothScrolling($links, $topGap) {
        var links = $links;
        var topGap = $topGap;
        links.on("click", function () {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
                if (target.length) {
                    $("html, body").animate({
                        scrollTop: target.offset().top - topGap
                    }, 1000, "easeInOutExpo");
                    return false;
                }
            }
            return false;
        });
    }
    $(window).on("load", function () {
        smoothScrolling($(".main-menu > nav > ul > li > a[href^='#']"), 70);
    });
    $('.nav-menu > ul').slicknav({
        'prependTo': '.mobile_menu'
    });

    function screen_slider() {
        var owl = $(".screen-slider");
        owl.owlCarousel({
            loop: true,
            margin: 20,
            navigation: false,
            items: 5,
            smartSpeed: 1000,
            dots: true,
            autoplay: true,
            center: true,
            autoplayTimeout: 2000,
            dotsEach: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 3
                },
                760: {
                    items: 3
                },
                1080: {
                    items: 5
                },
                1920: {
                    items: 5
                }
            }
        });
        // $('.custom1').owlCarousel({

        //     autoplayTimeout: 3000,    
        //     autoplay: true,
        //     dotsEach: true,
        //     items: 1,
        //     margin: 30,
        //     stagePadding: 0,
        //     smartSpeed: 450,
        //     dots: true,
        //     loop: true

        // });
    }
    screen_slider();

    function client_carousel() {
        var owl = $(".client-carousel");
        owl.owlCarousel({
            loop: true,
            margin: 60,
            navigation: false,
            items: 4,
            smartSpeed: 1000,
            dots: false,
            autoplay: true,
            autoplayTimeout: 5000,
            dotsEach: true,
            responsive: {
                0: {
                    items: 2
                },
                480: {
                    items: 3
                },
                760: {
                    items: 4
                },
                1080: {
                    items: 4
                },
                1920: {
                    items: 4
                }
            }
        });
    }
    client_carousel();

    function testimonial_slider() {
        var owl = $(".testimonial-slider");
        owl.owlCarousel({
            loop: true,
            margin: 20,
            navigation: false,
            items: 1,
            smartSpeed: 1000,
            dots: true,
            autoplay: false,
            autoplayTimeout: 500,
            dotsEach: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                760: {
                    items: 1
                },
                1080: {
                    items: 2
                },
                1920: {
                    items: 2
                }
            }
        });
    }
    testimonial_slider();
    $('.expand-video').magnificPopup({
        type: 'iframe'
    });
    $(window).on('load', function () {
        var myPlayer = $("#bgndVideo").YTPlayer();
    });
    if ($('.warm-canvas').length) {
        $('.warm-canvas').glassyWorms({
            colors: ['#fff', '#c2c2c2'],
            useStyles: true,
            numParticles: 500,
            tailLength: 20,
            maxForce: 8,
            friction: 0.75,
            gravity: 9.81,
            interval: 3
        });
    }
    $('.counter').counterUp({
        delay: 20,
        time: 2000
    });

    function bgParallax() {
        if ($(".parallax").length) {
            $(".parallax").each(function () {
                var height = $(this).position().top;
                var resize = height - $(window).scrollTop();
                var parallaxSpeed = $(this).data("speed");
                var doParallax = -(resize / parallaxSpeed);
                var positionValue = doParallax + "px";
                var img = $(this).data("bg-image");
                $(this).css({
                    backgroundImage: "url(" + img + ")",
                    backgroundPosition: "50%" + positionValue,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat"
                });
                if (window.innerWidth < 768) {
                    $(this).css({
                        backgroundPosition: "center center"
                    });
                }
            });
        }
    }
    bgParallax();
    $(window).on("scroll", function () {
        bgParallax();
    });
}(jQuery));





