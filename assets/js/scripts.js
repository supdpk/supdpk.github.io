jQuery(function ($) {

    'use strict';

    // --------------------------------------------------------------------
    // PreLoader
    // --------------------------------------------------------------------

    (function () {
      $.getJSON("assets/json/particle.json",function(data){
        // console.log(data);
        particlesJS('particles-js',data);
      });
        $('#preloader').delay(500).fadeOut('slow');
    }());
    
    // --------------------------------------------------------------------
    // Sticky Sidebar
    // --------------------------------------------------------------------

    $('.left-col-block, .right-col-block').theiaStickySidebar();


}); // JQuery end
$(($)=>{
  $.ajax({
    url:'/data.json',
    method:'GET',
    success:(res)=>{
      console.log(res);
      console.log(res);
      $('.name').html(res.name);
      $('.lead').html(res.title);
      $('.about-text').html(res.aboutMe);
      $('.profile-pic').prop('src',res.profilePic);
      console.log(!res.cv);
      console.log(!res.cv || res.cv=='');
      if(!res.cv || res.cv==''){
        $('.cv').hide();
      }
      else{
        $('.cv').prop('href',res.cv);
      }

      if(!res.cv || res.linkedin==''){
        $('.linkedin').hide();
      }
      else{
        $('.linkedin').prop('href',res.linkedin);
      }

      if(!res.github || res.github==''){
        $('.github').hide();
      }
      else{
        $('.github').prop('href',res.github);
      }
      
    }
  })
});