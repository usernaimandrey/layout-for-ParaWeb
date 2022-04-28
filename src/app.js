import carousel from './carousel/carousel.js';
import inputFocus from './filter__form/inputFocus.js';

const app = () => {
  const input = document.querySelector('.end_item');
  inputFocus(input);
  carousel();
};

export default app;
