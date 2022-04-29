import carousel from './carousel/carousel.js';
import inputFocus from './filter__form/inputFocus.js';
import CardsApi from './cardsApi.js';
import watcher from './view.js';

const app = () => {
  const state = {
    carts: [],
    load: '', // loading succes faled
    filterName: '',
    filterDate: '',
  };

  const watcheState = watcher(state);
  watcheState.load = 'loading';
  CardsApi.get()
    .then(({ data }) => {
      watcheState.carts.push(...data.articles);
      watcheState.load = 'succes';
    })
    .catch(() => {
      watcheState.load = 'faled';
    });

  const input = document.querySelector('.end_item');
  inputFocus(input);
  carousel();
};

export default app;
