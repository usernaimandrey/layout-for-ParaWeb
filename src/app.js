import carousel from './carousel/carousel.js';
import inputFocus from './filter__form/inputFocus.js';
import CartsService from './carts/cartsService.js';
import watcher from './view.js';

const app = () => {
  const state = {
    carts: [],
    load: '', // loading succes faled
    filterName: '',
    filterDate: {
      start: '',
      end: '',
    },
  };

  const cartsContainer = document.querySelector('.carts');
  const input = document.querySelector('.end_item');
  const carouselContainer = document.querySelector('.carousel');
  const watcheState = watcher(state, cartsContainer);
  const filterByName = document.querySelector('.filter__form__author_item');
  watcheState.load = 'loading';
  CartsService.getCarts()
    .then(({ data }) => {
      const normalizeData = data.articles.map((el) => {
        if (!el.author) {
          return { ...el, author: 'no-author' };
        }
        return el;
      });
      watcheState.carts.push(...normalizeData);
      watcheState.load = 'succes';
    })
    .catch(() => {
      watcheState.load = 'faled';
    });

  filterByName.addEventListener('input', (e) => {
    watcheState.filterName = e.target.value;
  });
  inputFocus(input);
  carousel(carouselContainer);
};

export default app;
