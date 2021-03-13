import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CounterCard from '../CounterCart/CounterCard';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quant: 0,
    };
  }

  render() {
    const { quant } = this.state;
    return (
      <header>
        <input
          id="searchInput"
          type="text"
          data-testid="query-input"
        />
        <button type="button" data-testid="query-button">
          Pesquisar
        </button>
        <button type="button">
          <Link to="/ShoppingCart" data-testid="shopping-cart-button">
            Carrinho de Compras
            <CounterCard total={ quant } />
          </Link>
        </button>
        <button type="button">
          <Link to="/Checkout" data-testid="checkout-products">
            checkout
          </Link>
        </button>
      </header>
    );
  }
}

export default Header;
