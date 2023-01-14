$(document).ready(function () {
    $(".owl-carousel").owlCarousel();
});


$('#owl-car-mobile').owlCarousel({
    loop:true,
    margin:10,
    items:1,
    nav: true
})


$('#owl-car-pc').owlCarousel({
    loop:true,
    items:6,
    nav: true
})



  $('#owl-price-pc').owlCarousel({
      items:2,
      loop:true,
      margin:10,
      autoplay:true,
      autoplayTimeout:4000,
      autoplayHoverPause:true
  });

  $('#owl-price-mobile').owlCarousel({
    items:1,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true
});