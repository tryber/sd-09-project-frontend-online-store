import React from 'react';
import { Link } from 'react-router-dom';
import ShopCart from './logo_shop_cart.svg';

class ButtonCart extends React.Component {
  render() {
    return (
      <div>
        <Link to="/ShoppingCart" data-testid="shopping-cart-button">
          <img src={ ShopCart } alt="logo shop cart" />
        </Link>
      </div>
    );
  }
}
export default ButtonCart;
