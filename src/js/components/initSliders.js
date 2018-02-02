import slick from 'slick-carousel';

export function initSliders() {

  let defaultOptions = {
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    dots: false,
    cssEase: 'ease',
    useTransform: true,
    infinite: true,
    accessibility: false,
    rows: 0,
    dotsClass: 'slider-dots'
  };

  const $slider = $('.js-slider');
  $slider.slick($.extend({}, defaultOptions, {
    slidesToShow: 1,
    slidesToScroll: 1
  }));

}