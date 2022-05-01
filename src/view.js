import onChange from 'on-change';
import CartsService from './carts/cartsService.js';
import filteredByName from './filter__form/filteredByName.js';

const watcher = (state, cartContainer) => onChange(state, (path, value) => {
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
    default: {
      console.log(`Unknow path ${path}`);
    }
  }
});

export default watcher;
