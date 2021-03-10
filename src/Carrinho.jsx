import React from 'react';
// import botaoCarrinhoVazio from './botaocarrinho.jpg';
// import carrinhoVazio from './carrinhovazio.jpg';

class Carrinho extends React.Component {
  render() {
    return (
      <div>
        <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>
      </div>
    );
  }
}

export default Carrinho;
