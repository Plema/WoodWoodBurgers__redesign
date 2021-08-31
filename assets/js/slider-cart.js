$(document).ready(function () {
  $('.slider-big').slick({
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
    asNavFor: '.slider-min',
    // fade: true,
  });
  $('.slider-min').slick({
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
    asNavFor: '.slider-big',
  });
});
