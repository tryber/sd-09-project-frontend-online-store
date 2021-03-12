import React, { Component } from 'react';

class CarrinhoVazio extends Component {
  render() {
    return (
      <div className='footer'>
        <p data-testid='shopping-cart-empty-message'>
          Seu carrinho está vazio
        </p>
      </div>
    )
  }
}

export default CarrinhoVazio;
