import Flickity from 'flickity';

const carousel = () => {
  const el = document.querySelector('.carousel');
  const newFlickity = new Flickity(el, {
    setGallerySize: true,
    wrapAround: true,
    freeScroll: true,
    prevNextButtons: false,
    autoPlay: 5000,
    accessibility: true,
    adaptiveHeight: true,
    percentPosition: true,
  });
  return newFlickity;
};

export default carousel;
