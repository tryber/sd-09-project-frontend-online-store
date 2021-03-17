import React from 'react';
import ShoppingCartItens from '../components/ShoppingCartItens';

class ShoppingCart extends React.Component {
  render() {
    return (
      <div className="App">
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        <ShoppingCartItens />
      </div>
    );
  }
}

export default ShoppingCart;
