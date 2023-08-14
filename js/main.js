// Setting caurosel items accoeding to vh
const responsive = {
  0:{
    items: 1
  },
  320:{
    items: 1
  },
  560:{
    items: 2
  },
  960:{
    items:3
  }
}

// For toggle menu icon button
$(document).ready(function () {
  $nav = $(".nav");
  $toggleCollapse = $(".toggle-collapse");

  // Click event on toggle menu
  $toggleCollapse.click(function () {
    $nav.toggleClass("collapse");
  });

  // Owl Crousel for blog
$('.owl-carousel').owlCarousel({
  // For blog transitions
  loop: true,
  autoplay: true,
  autoplayTimeout: 3000,

  // for remove dots
  dots: false,

  // TO enable navigation to slide
  nav:true,
  navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],

  // To make owl Crousel responsive
  responsive: responsive
});

// click to scroll top of website
$('.move-up span').click(function(){
  $('html, body').animate({
    scrollTop: 0
  }, 2000);
})

// AOS instance
AOS.init();
});


