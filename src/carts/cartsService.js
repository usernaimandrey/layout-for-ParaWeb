import cartCreate from './cart.js';
import CartsApi from '../utils/cartsApi';

class CartsService {
  constructor() {
    this.cartCreate = cartCreate;
    this.cartsApi = CartsApi;
  }

  getCarts() {
    return this.cartsApi.get();
  }

  renderCarts(carts, container) {
    const newCarts = carts.map((cartData) => {
      const cart = this.cartCreate(cartData);
      // container.append(cart);
      return cart;
    });
    container.replaceChildren(...newCarts);
  }
}

export default new CartsService();
