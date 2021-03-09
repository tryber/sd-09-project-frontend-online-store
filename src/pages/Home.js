import React, { Component } from 'react';
import Categories from '../components/Categories';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div className="App">
        <input type="text" />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <div className="left-side">
          <Categories />
        </div>
        <button type="button">
          <Link to="/ShoppingCart" data-testid="shopping-cart-button">
            Carrinho de Compras
          </Link>
        </button>
      </div>
    );
  }
}
