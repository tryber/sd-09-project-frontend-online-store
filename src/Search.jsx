import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import botaoCarrinhoVazio from './botaocarrinho.jpg';

class Search extends Component {
  render() {
    return (
      <div>
        <div data-testid="home-initial-message">
          <h1>Digite algum termo de pesquisa ou escolha uma categoria.</h1>
          <Link data-testid="shopping-cart-button" to="/carrinho">
            <img src={ botaoCarrinhoVazio } alt="botãoCarrinhoVazio" />
          </Link>
        </div>
      </div>
    );
  }
}

export default Search;
