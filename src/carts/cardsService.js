import cartCreate from './card.js';
import CardsApi from '../utils/cardsApi';

class CartsService {
  constructor() {
    this.cartCreate = cartCreate;
    this.cartsApi = CardsApi;
  }

  getCarts() {
    return this.cartsApi.get();
  }

  renderCarts(carts, container) {
    const newCarts = carts.map((cartData) => {
      const cart = this.cartCreate(cartData);
      return cart;
    });
    container.replaceChildren(...newCarts);
  }
}

export default new CartsService();
