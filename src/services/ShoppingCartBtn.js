import React from 'react';
import { Link } from 'react-router-dom';
// import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

class ShoppingCartBtn extends React.Component {
  render() {
    return (
      <div>
        <Link
          to="/shoppingcart"
          data-testid="shopping-cart-button"
        >
          <button type="button">
            CARRINHO
          </button>
        </Link>
      </div>
    );
  }
}

export default ShoppingCartBtn;
