import onChange from 'on-change';
import renderCarts from './carts/carts.js';

const watcher = (state) => onChange(state, (path, value) => {
  if (path === 'carts') {
    console.log(value);
    renderCarts(value);
  }
});

export default watcher;
