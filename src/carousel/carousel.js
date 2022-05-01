import Flickity from 'flickity';

const carousel = (container) => {
  const newFlickity = new Flickity(container, {
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
