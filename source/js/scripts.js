$(document).ready(function () {
    // Card animation
    var animationDelay = 300;

    var openCard = function($card) {
        $card.toggleClass('card2-detached');
        $card.css('z-index', '11');

        // Waits card to detach
        setTimeout(function() {
            $card.toggleClass('card2-collapsed card2-expanded');
        }, animationDelay);
    };

    var closeCard = function($card) {
        $card.toggleClass('card2-collapsed card2-expanded');

        // Waits card to collapse
        setTimeout(function() {
            $card.toggleClass('card2-detached');

            // Waits card to attach
            setTimeout(function() {
                $card.css('z-index', '0');
            }, animationDelay);
        }, animationDelay);
    }

    $('.card2-row').on('click', '.card2-collapsed', function() {
        // Only one card should be open at a time
        closeCard($('.card2-expanded'));
        openCard($(this));
    });

    $('.card2-row').on('click', '.card2-expanded', function() {
        closeCard($(this));
    });

    // Smooth Scrolling Function
    $('a[href*=#]:not([href=#])').click(function () {
        var $targ = $(this.hash),
            host1 = this.hostname,
            host2 = location.hostname,
            path1 = this.pathname.replace(/^\//, ''),
            path2 = location.pathname.replace(/^\//, '');

        if (!$targ.length) {
            $targ = $('[name=' + this.hash.slice(1) + ']');
        }

        if ($targ.length && (host1 === host2 || path1 === path2)) {
            $('html, body').animate({ scrollTop: $targ.offset().top }, 1000);

            return false;
        }

        return true;
    });

    // Modal Click Behavior
    // $('.js-open-modal').click(function () {
    //     $('.js-target-modal').addClass('js-active');
    //     $('#overlay').addClass('js-active');
    //     $('body').addClass('js-body-modal-active');
    // });

    // $('.js-close-modal').click(function () {
    //     $('.js-target-modal').removeClass('js-active');
    //     $('#overlay').removeClass('js-active');
    //     $('body').removeClass('js-body-modal-active');
    // });

    // Sticky Click Behavior
    $('.js-close-sticky').click(function () {
        $('.js-target-sticky').removeClass('js-active');
    });

    // Search Click Behavior
    $('.js-trigger-search').click(function (e) {
        e.preventDefault();
        $(this).parent().addClass('js-active');
        $('#overlay').addClass('js-active');
    });

    // Main Menu Click Behavior
    $('.js-trigger-menu').click(function (e) {
        $(this).next().addClass('js-active-menu');
        $('#overlay').addClass('js-active');
    });

    // Slider
    $('.slider').slick({
        arrows: true,
        draggable: false,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    draggable: true
                }
            }
        ]
    });
}); // doc.ready
