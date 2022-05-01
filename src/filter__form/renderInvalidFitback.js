const renderInvalidFitback = (text) => {
  const element = document.querySelector('.filter__form__date_invalid-fit-back');
  if (!text) {
    element.style.display = 'none';
  }
  element.textContent = text;
  element.style.display = 'block';
};

export default renderInvalidFitback;
