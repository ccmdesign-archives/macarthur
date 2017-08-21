$(document).ready(function () {
  
  // $(".js-card-trigger").click(function() {
  //   $(this).addClass('js-card-expanded'); 
  //   $(this).removeClass('js-card-collapsed');
  //   $('#overlay').addClass('js-active');
  //   $('body').addClass('js-body-card-active');
  // });

  // $("#overlay").click(function() {
  //   $(".js-card-trigger").removeClass('js-card-expanded');
  //   $(".js-card-trigger").addClass('js-card-collapsed');
  //   $('#overlay').removeClass('js-active');
  //   $('body').removeClass('js-body-card-active');
  // });

  $(".js-card2-trigger").click(function() {
    $(this).addClass('js-card2-expanded');
    $(this).addClass('card2-animation');
    $(this).removeClass('js-card2-collapsed');
    $('#overlay').addClass('js-active');
    $(this).removeClass('card2-animation');
  });

  $("#overlay").click(function() {
    $(".js-card2-trigger").removeClass('js-card2-expanded');
    $('.js-card2-trigger').addClass('card2-animation');
    $(".js-card2-trigger").addClass('js-card2-collapsed');
    $('.js-card2-trigger').removeClass('card2-animation');
    $('#overlay').removeClass('js-active');
    
  });



  // var cards = $('.card-list').children();

  // cards.each(function( index ) {

  // });








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
