import React from 'react';

class CartItems extends React.Component {
  render() {
    console.log(this.props);
    const messageEmptyCart = 'Seu carrinho está vazio';
    const { product } = this.props;
    if (!product) {
      return (
        <div data-testid="shopping-cart-empty-message">
          {messageEmptyCart}
        </div>
      );
    }
    if (product) {
      return (
        <section>
          <img src={ product.thumbnail } alt="product" />
          <div data-testid="shopping-cart-product-name">{product.title}</div>
          <input
            type="number"
            step="1"
            min="1"
            data-testid="shopping-cart-product-quantity"
          />
        </section>
      );
    }
  }
}

export default CartItems;
