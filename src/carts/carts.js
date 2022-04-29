const renderCarts = (carts) => {
  const cartsContainer = document.querySelector('.carts');
  carts.forEach(({
    author, description, title, publishedAt,
  }) => {
    const cartsItem = document.createElement('div');
    cartsItem.classList.add('carts__item');

    const cartHeader = document.createElement('div');
    cartHeader.classList.add('carts__item__header');

    const cartHeaderItem = document.createElement('h3');
    cartHeaderItem.classList.add('carts__item__header_item');
    cartHeaderItem.textContent = title;
    cartHeader.append(cartHeaderItem);

    const cartBody = document.createElement('div');
    cartBody.classList.add('carts__item__body');

    const cartBodyText = document.createElement('p');
    cartBodyText.classList.add('carts__item__body_text');
    cartBodyText.textContent = description;
    cartBody.append(cartBodyText);

    const footer = document.createElement('div');
    footer.classList.add('carts__item__footer');

    const newAuthor = author || 'no-author';
    const footerAuthor = document.createElement('div');
    footerAuthor.classList.add('carts__item__footer_text');
    footerAuthor.classList.add('carts__item__footer_color-author');
    footerAuthor.textContent = newAuthor;
    footer.append(footerAuthor);

    const footerDate = document.createElement('div');
    footerDate.classList.add('carts__item__footer_text');
    footerDate.classList.add('carts__item__footer_color-date');
    footerDate.textContent = publishedAt;
    footer.append(footerDate);

    cartsItem.append(cartHeader, cartBody, footer);
    cartsContainer.append(cartsItem);
  });
};

export default renderCarts;
