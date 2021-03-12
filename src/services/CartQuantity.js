import Cart from './Data';

const CartQuantity = () => {
  let result = 0;
  Cart.forEach(({ quantity }) => { result += quantity; });
  console.log(result);
  return result;
};

export default CartQuantity;
