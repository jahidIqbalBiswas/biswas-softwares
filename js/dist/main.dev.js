"use strict";

$(document).ready(function () {
  $(".nav-container").sticky({
    topSpacing: 0,
    zIndex: 99999
  });
  $('.service-video').parallaxie({
    speed: .9,
    offset: 50
  });
  $('.achievement').parallaxie({
    speed: .5
  });
  $('.counter').counterUp({
    time: 1000
  });
  $('.play-video').magnificPopup({
    type: 'iframe',
    // other options
    iframe: {
      markup: '<div class="mfp-iframe-scaler">' + '<div class="mfp-close"></div>' + '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' + '</div>',
      patterns: {
        youtube: {
          index: 'youtube.com/',
          id: 'v=',
          src: 'https://www.youtube.com/embed/%id%?autoplay=1'
        },
        vimeo: {
          index: 'vimeo.com/',
          id: '/',
          src: 'https://player.vimeo.com/video/%id%?autoplay=1'
        },
        gmaps: {
          index: 'https://maps.google.',
          src: '%id%&output=embed'
        }
      },
      srcAction: 'iframe_src'
    }
  });
  $(".testi-wrapper").owlCarousel({
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      }
    },
    margin: 30,
    loop: true,
    mouseDrag: true,
    autoplay: true,
    autoplayTimeout: 2000
  });
  AOS.init();
  new WOW().init();
  scroller.init();
}); //----mixitup---

var any = document.querySelector(".port-wrapper");
var filter = mixitup(any, {
  selectors: {
    control: "[fix-control]"
  }
}); // toggler button

var container = document.querySelector(".toggleContainer");
container.addEventListener("click", function () {
  document.body.classList.toggle("click");
});