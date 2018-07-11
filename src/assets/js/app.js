import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';
$(document).foundation();

//showing and hiding the sticky dot nav
$(document).ready( function() {
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  var vpHeight = ($(".upperquad").height());
  var presDis = $('.sticky-container').css("display");

  if (scroll >= vpHeight) {
    $('audio').trigger('play');
    if (presDis == "none" ) {
  $('.sticky-container').css("display", "block");
}
  }
  else{
    if (presDis == "block" ) {
  $('.sticky-container').css("display", "none");
}

//playing the audio on scroll Base




  //end of audio stuff
  }


});
});

// Global Nav

$('[data-toggle-menu]').on("click", function(){
  $("#overlay-nav-menu").toggleClass("is-open");
});

//Audio


$("video").prop('muted', true);

  $("#mute-audio").click( function (){
    if( $("audio").prop('muted') ) {
          $("audio").prop('muted', false);
    } else {
      $("audio").prop('muted', true);
    }
  });
