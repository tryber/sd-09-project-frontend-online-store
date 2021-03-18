import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class ButtonCart extends Component {
  constructor() {
    super();
    this.routeCart = this.routeCart.bind(this);
    this.state = {
      redirect: false,
    };
  }

  routeCart() {
    this.setState(
      { redirect: true },
    );
  }

  render() {
    const { redirect } = this.state;
    if (redirect) return <Redirect to="/ShoppingCart" />;
    return (
      <button
        type="button"
        onClick={ this.routeCart }
        data-testId="shopping-cart-button"
      >
        Carrinho
      </button>
    );
  }
}

export default ButtonCart;
