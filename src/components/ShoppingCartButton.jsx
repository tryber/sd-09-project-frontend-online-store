import React from 'react';
import { Link } from 'react-router-dom';

export default function ShoppingCartButton() {
  return (
    <div>
      <Link to="/shopping-cart" data-testid="shopping-cart-button">
        {/* <button type="button">
          <img src="../../public/shoppingCartIcon.svg" alt="Shopping Cart Icon" />
        </button> */}
        Carrinho
      </Link>
    </div>
  );
}
