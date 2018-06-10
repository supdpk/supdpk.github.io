jQuery(function ($) {

    'use strict';

    // --------------------------------------------------------------------
    // PreLoader
    // --------------------------------------------------------------------

    (function () {
      $.getJSON("assets/json/particle.json",function(data){
        console.log(data);
        particlesJS('particles-js',data);
      });
        $('#preloader').delay(500).fadeOut('slow');
    }());
    
    // --------------------------------------------------------------------
    // Sticky Sidebar
    // --------------------------------------------------------------------

    $('.left-col-block, .right-col-block').theiaStickySidebar();


}); // JQuery end
