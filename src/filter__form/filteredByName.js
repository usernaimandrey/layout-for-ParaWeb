const filteredByName = (carts, name) => {
  const filteredCarts = carts
    .filter(({ author }) => author.toLowerCase().indexOf(name.toLowerCase()) !== -1);
  return filteredCarts;
};

export default filteredByName;
