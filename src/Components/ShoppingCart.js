import React from 'react';

class ShoppingCart extends React.Component {
  constructor() {
    super();
    this.listCart = this.listCart.bind(this);
  }

  listCart() {
    const cartList = JSON.parse(localStorage.getItem('cart'));
    return (
      <div>
        { cartList.map(({ id, title, thumbnail, price }) => (
          <div key={ id } data-testid="shopping-cart-product-name">
            <p>{ title }</p>
            <img src={ thumbnail } alt="title" />
            <p>{ price }</p>
          </div>
        ))}
      </div>
    );
  }

  render() {
    const quant = JSON.parse(localStorage.getItem('quant'));
    if (quant > 0) {
      return (
        <div>
          <p data-testId="shopping-cart-product-quantity">
            { `Itens no carrinhos: ${quant}` }
          </p>
          { this.listCart() }
        </div>
      );
    } return <p data-testId="shopping-cart-empty-message">Seu carrinho está vazio</p>;
  }
}

export default ShoppingCart;
