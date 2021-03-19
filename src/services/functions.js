export function addToCartBtn(product) {
  const checkCartList = localStorage.getItem('shoppingCartList');
  let cartList = [];
  if (checkCartList) {
    cartList = JSON.parse(checkCartList);
  }
  const productCartInfos = {
    id: product.id,
    name: product.title,
    price: product.price,
    thumb: product.thumbnail,
    quantity: 1,
  };
  if (cartList.length === 0) {
    cartList.push(productCartInfos);
    return localStorage.setItem('shoppingCartList', JSON.stringify(cartList));
  }
  const cartItemsCheck = cartList.findIndex((item) => product.id === item.id);
  if (cartItemsCheck >= 0) {
    cartList[cartItemsCheck].quantity += 1;
    localStorage.setItem('shoppingCartList', JSON.stringify(cartList));
  } else {
    cartList.push(productCartInfos);
    localStorage.setItem('shoppingCartList', JSON.stringify(cartList));
  }
}

export default addToCartBtn;
