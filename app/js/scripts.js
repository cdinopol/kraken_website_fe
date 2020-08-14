/*!
    * Start Bootstrap - Agency v6.0.2 (https://startbootstrap.com/template-overviews/agency)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
    */
    (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 72,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 74,
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav.main").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
            $("#main-logo").attr("src", "assets/img/logo_min.png");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
            $("#main-logo").attr("src", "assets/img/logo.png");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);

    // News - load more
    $("div.news-entry").slice(0, 2).show();
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $("div.news-entry:hidden").slice(0, 2).slideDown();
        if ($("div.news-entry:hidden").length == 0) {
            $("#load").fadeOut('slow');
        }
    });

    // Countdown
    var cdd = new Date("Aug 17, 2020 12:00:00 GMT+00");
    var countDownDate = new Date(cdd.getUTCFullYear(), cdd.getUTCMonth(), cdd.getUTCDate(), cdd.getUTCHours(), cdd.getUTCMinutes(), cdd.getUTCSeconds());
    var x = setInterval(function() {
        var now = new Date();
        var nowx = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds());
        var distance = countDownDate - nowx;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        $(".opening_countdown").html(
            days + "d " + 
            hours + "h " +
            minutes + "m " + 
            seconds + "s"
        );
        if (distance < 0) {
            clearInterval(x);
            $(".coming_soon").html("WE ARE LIVE!");
        }
    }, 1000);
})(jQuery); // End of use strict
