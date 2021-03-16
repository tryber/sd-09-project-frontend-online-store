import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import ItemCart from './ItemCart';

class ShoppingCart extends Component {
  render() {
    const { cartItems, sumToCart } = this.props;
    if (cartItems.length < 1) {
      return (
        <h3
          data-testid="shopping-cart-empty-message"
        >
          Seu carrinho está vazio
        </h3>
      );
    }
    return (
      <div>
        { cartItems.map((item) => (
          <ItemCart
            key={ item.id }
            item={ item }
            sumToCart={ sumToCart }
          />))}
        <Link to="/checkout-cart" data-testid="checkout-products">Finalizar compra</Link>
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  cartItems: PropTypes.arrayOf(),
  sumToCart: PropTypes.func,
}.isRequired;

export default ShoppingCart;
