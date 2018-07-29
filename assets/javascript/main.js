(function($) {

  "use strict";

  $(window).on('load', function() {
    $('#preloader').fadeOut();

    jQuery('#clock').countdown('2018/08/11 16:00:00',function(event){
      var $this=jQuery(this).html(event.strftime(''
        +'<div class="time-entry days"><span>%-D</span> Tage</div> '
        +'<div class="time-entry hours"><span>%H</span> Stunden</div> '
        +'<div class="time-entry minutes"><span>%M</span> Minuten</div> '
        +'<div class="time-entry seconds"><span>%S</span> Sekunden</div> '));
    });

    var offset = 200;
    var duration = 500;
    $(window).scroll(function() {
      if ($(this).scrollTop() > offset) {
        $('.back-to-top').fadeIn(400);
      } else {
        $('.back-to-top').fadeOut(400);
      }
    });

    $('.back-to-top').on('click',function(event) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: 0
      }, 600);
      return false;
    });

  });

}(jQuery));
