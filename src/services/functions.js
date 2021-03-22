export function findProductLocalStorage(id) {
  const { length } = localStorage;
  const result = [];

  if (length > 0) {
    for (let index = 1; index <= length; index += 1) {
      const gottenItemObj = JSON.parse(
        localStorage.getItem(`itemProduct${index}`),
      );

      if (gottenItemObj.id === id) {
        result.push(gottenItemObj);
        result.push(index);
      }
    }
  }

  return result;
}

export default function saveProductLocalStorage(array) {
  const findProduct = findProductLocalStorage(array.id);
  const { length } = localStorage;
  const newObj = array;
  let findObj = 0;

  if (findProduct.length > 0) {
    const [gottenItemObj, index] = findProduct;

    if (gottenItemObj.id === array.id) {
      gottenItemObj.quantity += 1;
      findObj += 1;
      localStorage.setItem(
        `itemProduct${index}`,
        JSON.stringify(gottenItemObj),
      );
    }
  }

  if (length === 0 || findObj === 0) {
    newObj.quantity = 1;
    newObj.reviews = [];
    localStorage.setItem(`itemProduct${length + 1}`, JSON.stringify(newObj));
  }
}

export function quantityAllProductsCart() {
  const { length } = localStorage;

  if (length > 0) {
    let sum = 0;

    for (let index = 1; index <= length; index += 1) {
      const gottenItemObj = JSON.parse(
        localStorage.getItem(`itemProduct${index}`),
      );
      sum += gottenItemObj.quantity;
    }

    return sum;
  }

  return '0';
}

export function quantityAllProductItem(id) {
  const findProduct = findProductLocalStorage(id);
  const [productObj] = findProduct;
  const initial = 1;

  if (findProduct.length) {
    return productObj.quantity;
  }

  return initial;
}

export function productIncrease(id) {
  const findProduct = findProductLocalStorage(id);
  const [productObj, index] = findProduct;

  if (findProduct.length && productObj.quantity < productObj.available_quantity) {
    productObj.quantity += 1;
    localStorage.setItem(`itemProduct${index}`, JSON.stringify(productObj));
  }
}

export function productDecrease(id) {
  const findProduct = findProductLocalStorage(id);
  const [productObj, index] = findProduct;

  if (findProduct.length > 0 && productObj.quantity > 0) {
    productObj.quantity -= 1;
    localStorage.setItem(`itemProduct${index}`, JSON.stringify(productObj));
  }
}

export function captureProduct() {
  const products = [];
  let totalPriceProducts = 0;

  for (let index = 1; index <= localStorage.length; index += 1) {
    const gottenItemObj = JSON.parse(localStorage.getItem(`itemProduct${index}`));
    const { id, title, price, quantity, thumbnail } = gottenItemObj;
    const availableQuantity = gottenItemObj.available_quantity;

    products.push({
      id,
      title,
      price,
      thumbnail,
      quantity,
      availableQuantity,
    });

    totalPriceProducts += (price * quantity);
  }

  return [products, totalPriceProducts];
}

// function saveRating() {
//   const { ratingSpace } = component onde tem o form rating;
//   const { input: { value } } = ratingSpace;
//   localstorage.setItem('itemProductID{id}', value);
// }
