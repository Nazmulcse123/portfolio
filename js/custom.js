$(document).ready(function () {
  $(".featured_slider").owlCarousel({
    loop: true,
    autoplay: false,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    smartSpeed: 1000,
    navText: ["<i class='fas fa-angle-left arrow_left'></i>", "<i class='fas fa-angle-right arrow_right'></i>"],
    margin: 0,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  $(".venobox").venobox({
    framewidth: "400px",
    frameheight: "300px",
    border: "6px",
    bgcolor: "#0bceaf",
    spinner: "wave",
    spinColor: "#0bceaf",
    closeColor: "red",
    arrowsColor: "#0bceaf",
  });

  // client slider section ===============================

  $(".main_slide").slick({
    dots: true,
    infinite: true,
    dots: true,
    autoplay: true,
    speed: 1000,
    arrows: false,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
});
