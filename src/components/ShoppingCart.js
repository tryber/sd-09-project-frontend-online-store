import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ProductCart from './ProductCart';

class ShoppingCart extends React.Component {
  render() {
    const { cartProducts } = this.props;
    if (cartProducts.length === 0) {
      return (
        <div>
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
          <Link to="/">Pagina inicial</Link>
        </div>
      );
    }
    return (
      <div>
        {cartProducts.map((productCart) => (<ProductCart
          key={ productCart.id }
          id={ productCart.id }
          title={ productCart.title }
          thumbnail={ productCart.thumbnail }
          price={ productCart.price }
        />)) }
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  cartProducts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ShoppingCart;
