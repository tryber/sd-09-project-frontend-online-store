import React from 'react';

class Carrinho extends React.Component {
  render() {
    return (
      <section>
        <span data-testid="shopping-cart-empty-message">Seu carrinho está vazio</span>
      </section>
    );
  }
}

export default Carrinho;
