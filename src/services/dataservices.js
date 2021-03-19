import ProductsAtCart from './data';

export function handleQuantity(operator, productId) {
  const findedProduct = ProductsAtCart.find((product) => productId === product.productId);
  if (operator === '+' && findedProduct.quantity < findedProduct.availableQnt) {
    findedProduct.quantity += 1;
  } else if (operator === '-') {
    findedProduct.quantity -= 1;
    if (findedProduct.quantity < 0) {
      findedProduct.quantity = 0;
    }
  } else if (operator === '=') {
    return findedProduct.quantity;
  }
}

export function incrementProduct(newProduct) {
  const { title, image, price, productId, availableQnt } = newProduct;
  const findProduct = ProductsAtCart
    .find((product) => product.productId === newProduct.productId);
  if (!findProduct) {
    ProductsAtCart.push({ title, image, price, productId, quantity: 1, availableQnt });
  } else {
    handleQuantity('+', productId);
  }
}
