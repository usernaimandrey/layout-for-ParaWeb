import onChange from 'on-change';
import CartsService from './carts/cardsService.js';
import filteredByName from './filter__form/filteredByName.js';
import filteredByDate from './filter__form/filteredByDate.js';
import renderInvalidFitback from './filter__form/renderInvalidFitback.js';
import renderError from './carts/renderError.js';

const watcher = (state, cartContainer) => onChange(state, (path, value) => {
  const toast = document.querySelector('.carts__toast');
  switch (path) {
    case 'carts': {
      CartsService.renderCarts(value, cartContainer);
      break;
    }
    case 'filterName': {
      const filtered = filteredByName(state.carts, value);
      CartsService.renderCarts(filtered, cartContainer);
      break;
    }
    case 'filterDate.start': {
      const filtered = filteredByDate(state.carts, value, state.filterDate.end);
      CartsService.renderCarts(filtered, cartContainer);
      break;
    }
    case 'filterDate.end': {
      const filtered = filteredByDate(state.carts, state.filterDate.start, value);
      CartsService.renderCarts(filtered, cartContainer);
      break;
    }
    case 'errValidateDate': {
      renderInvalidFitback(value);
      break;
    }
    case 'load': {
      if (value === 'faled') {
        renderError(toast);
      }
      break;
    }
    default: {
      console.log(`Unknow path ${path} ${value}`);
    }
  }
});

export default watcher;
