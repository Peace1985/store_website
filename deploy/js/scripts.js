/***
 * Smooth scrolling
 */

$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function(){

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
        });
        } // End if
    });
});

/**
 * 
 *  simpleParallax 
 */
const simpleParallax = (id, modifier) => {
    let paraId = document.querySelector(id);
  paraId.setAttribute('style', 'background-repeat: no-repeat; background-attachment: fixed; background-size: cover;background-position: center center;');
  const sp = () => {
      let x = paraId.getBoundingClientRect().top / modifier;
      let y = Math.round(x * 200) / 100;
      paraId.style.backgroundPosition = 'left ' + y + 'px';
  }
  sp();
  window.addEventListener('scroll', function(e) { sp(); });
}


if(window.screen.width > 1024)
simpleParallax('.header',4);



/**
 *  preloader
 */
(function($){
    'use strict';
      $(window).on('load', function () {
          if ($(".pre-loader").length > 0)
          {
            $(".pre-loader").fadeOut("slow");
            var logo = document.getElementsByClassName("header__logo")[0];
            logo.classList.add("zoom-in");
          }
      });
  })(jQuery)