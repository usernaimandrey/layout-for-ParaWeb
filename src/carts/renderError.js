const renderError = (container) => {
  container.classList.add('carts__toast_show');
  setTimeout(() => container.classList.remove('carts__toast_show'), 3000);
};

export default renderError;
