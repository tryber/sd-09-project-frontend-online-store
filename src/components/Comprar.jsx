import React, { Component } from 'react';

class Comprar extends Componet {
  render() {
    const { id, title, price, productToCart } = this.props;
    return (
      <button
        type='button'
        data-testid='product-add-to-cart'
        onClick={ () => productToCart(id, title, price)} >
        Comprar
      </button>
    )
  }
}

export default Comprar;
