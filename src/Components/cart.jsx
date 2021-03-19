import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CartItem from './cartItem';
import dataCart from '../services/dataCart';

class Cart extends Component {
  render() {
    return (
      <div>
        <button type="button">
          <Link to="/checkout" data-testid="checkout-products">
            checkout
          </Link>
        </button>
        {dataCart.array.length < 1
          ? <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
          : dataCart.array.map((product) => (
            <CartItem product={ product } key={ product } />
          ))}
      </div>
    );
  }
}

export default Cart;
