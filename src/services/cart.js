const productsCartKey = 'cart-products';

function addToCart(product) {
  const productsString = localStorage.getItem(productsCartKey);
  let products = [];
  if (productsString) {
    products = JSON.parse(productsString);
  }
  products.push({ ...product, quantity: 1 });
  localStorage.setItem(productsCartKey, JSON.stringify(products));
}

function getProdutsInStorage() {
  if (localStorage.length !== 0) {
    const getProducts = JSON.parse(localStorage.getItem('cart-products'));
    return getProducts;
  }
  return [];
}

export default { addToCart, getProdutsInStorage };
