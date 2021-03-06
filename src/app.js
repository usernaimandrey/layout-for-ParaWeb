/* eslint-disable no-restricted-globals */
import carousel from './carousel/carousel.js';
import inputFocus from './filter__form/inputFocus.js';
import CartsService from './carts/cardsService.js';
import DateService from './utils/DateService.js';
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
    errValidateDate: null,
  };

  const cartsContainer = document.querySelector('.carts');
  const carouselContainer = document.querySelector('.carousel');
  const watcheState = watcher(state, cartsContainer);
  const inputDateStart = document.querySelector('.start_item');
  const inputDateEnd = document.querySelector('.end_item');
  const filterByName = document.querySelector('.filter__form__author_item');
  const fixedElement = document.querySelector('.filter__form');
  const header = document.querySelector('.header');
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

  window.addEventListener('scroll', () => {
    const el = fixedElement.getBoundingClientRect();
    const { height } = header.getBoundingClientRect();
    const cartsEl = cartsContainer.getBoundingClientRect();

    if (el.top - height <= 0) {
      fixedElement.style.position = 'fixed';
      fixedElement.style.top = `${height + 20}px`;
      fixedElement.style.bottom = '';
    }
    if (cartsEl.top > 150) {
      fixedElement.style.position = '';
    }
  });

  filterByName.addEventListener('input', (e) => {
    const { value } = e.target;
    watcheState.filterName = value;
  });

  inputDateStart.addEventListener('input', (e) => {
    const { value } = e.target;
    if (!value) {
      watcheState.filterDate.start = '';
      watcheState.errValidateDate = null;
      return;
    }
    const date = DateService.validate(value);
    if (!date) {
      watcheState.errValidateDate = '???????? ?? ?????????????? ???????? ???? ????';
      return;
    }
    watcheState.errValidateDate = null;
    [watcheState.filterDate.start] = date;
  });

  inputDateEnd.addEventListener('input', (e) => {
    const { value } = e.target;
    const date = DateService.validate(value);
    if (!value) {
      watcheState.filterDate.end = '';
      watcheState.errValidateDate = null;
      return;
    }
    if (!date) {
      watcheState.errValidateDate = '???????? ?? ?????????????? ???? ???? ????????';
      return;
    }
    watcheState.errValidateDate = null;
    [watcheState.filterDate.end] = date;
  });

  inputFocus(inputDateEnd);
  carousel(carouselContainer);
};

export default app;
