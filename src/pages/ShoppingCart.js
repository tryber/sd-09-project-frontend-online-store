import React from 'react';

class ShoppingCart extends React.Component {
  render() {
    return (
      <div className="App">
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      </div>
    );
  }
}

export default ShoppingCart;
