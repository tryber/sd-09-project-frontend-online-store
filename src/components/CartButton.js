import React from 'react';
import { Link } from 'react-router-dom';

class CartButton extends React.Component {
  render() {
    return (
      <button type="button">
        <Link
          to="/ShoppingCart"
          data-testid="shopping-cart-button"
        >
          Carrinho de compras
        </Link>
      </button>
    );
  }
}

export default CartButton;
