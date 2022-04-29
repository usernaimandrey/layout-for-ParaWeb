import axios from 'axios';
import getRoute from './route.js';

class CardsApi {
  constructor() {
    this.axios = axios.create({
      baseURL: getRoute(),
      timeout: 1000,
    });
  }

  get() {
    return this.axios.get();
  }
}

export default new CardsApi();
