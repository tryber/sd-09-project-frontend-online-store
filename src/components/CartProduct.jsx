import React, { Component } from 'react';
import { string, number, func, shape } from 'prop-types';

class CartProduct extends Component {
  render() {
    const { product, addItem, removeItem, removeCartProduct } = this.props;
    const { title, thumbnail, price, quantity } = product;
    return (
      <div>
        <button
          type="button"
          onClick={ () => removeCartProduct(product) }
        >
          Remover produto
        </button>
        <img src={ thumbnail } alt="" />
        <p data-testid="shopping-cart-product-name">{title}</p>
        <button
          type="button"
          onClick={ () => addItem(product) }
          data-testid="product-increase-quantity"
        >
          Adicionar item
        </button>
        <p data-testid="shopping-cart-product-quantity">{quantity}</p>
        <button
          type="button"
          onClick={ () => removeItem(product) }
          data-testid="product-decrease-quantity"
        >
          Remover item
        </button>
        <p>
          {`Total do produto: R$ ${parseFloat(quantity * price).toFixed(2)}`}
        </p>
      </div>
    );
  }
}

CartProduct.propTypes = {
  product: shape({
    title: string,
    thumbnail: string,
    price: string,
    quantity: number,
  }),
  addItem: func,
  removeItem: func,
  removeCartProduct: func,
}.isRequired;

export default CartProduct;
