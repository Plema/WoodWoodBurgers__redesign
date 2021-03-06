$(document).ready(function () {
  $('.slider-card__big').slick({
    arrows: true,
    dots: false,
    adaptiveHeight: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    easing: 'linear',
    infinite: true,
    initialSlide: 0,
    autoplay: false,
    autoplaySpeed: 5000,
    waitForAnimate: true,
    asNavFor: '.slider-card__min',
    // fade: true,
  });
  $('.slider-card__min').slick({
    arrows: false,
    dots: false,
    adaptiveHeight: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 500,
    focusOnSelect: true,
    easing: 'linear',
    infinite: true,
    initialSlide: 0,
    autoplay: false,
    autoplaySpeed: 5000,
    waitForAnimate: true,
    asNavFor: '.slider-card__big',
  });
  $('.slider-recommend').slick({
    arrows: true,
    dots: true,
    adaptiveHeight: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 500,
    focusOnSelect: true,
    easing: 'linear',
    infinite: true,
    initialSlide: 0,
    autoplay: false,
    autoplaySpeed: 5000,
    waitForAnimate: true,
    initialSlide: 1,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  });
});
