import React from 'react';

class Cart extends React.Component {
  render() {
    return (
      <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      // Adicione o atributo data-testid com o valor shopping-cart-empty-message no elemento da mensagem.
    );
  }
}

export default Cart;
