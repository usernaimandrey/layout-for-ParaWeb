const inputFocus = (el) => {
  const neighboringInput = document.querySelector('.start_item');
  el.addEventListener('focus', () => {
    neighboringInput.style.border = '2px solid #000';
  });
  el.addEventListener('blur', () => {
    neighboringInput.style.border = '1px solid #E8E8E8';
  });
  neighboringInput.addEventListener('blur', () => {
    neighboringInput.style.border = '1px solid #E8E8E8';
  });
};

export default inputFocus;
