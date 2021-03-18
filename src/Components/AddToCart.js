import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddToCart extends Component {
  constructor() {
    super();
    this.addItem = this.addItem.bind(this);
  }

  addItem() {
    const { product } = this.props;
    const getList = JSON.parse(localStorage.getItem('cart'));
    let contador = JSON.parse(localStorage.getItem('quant'));
    contador += 1;
    localStorage.setItem('quant', contador);
    const newList = getList ? [...getList, product] : [product];
    localStorage.setItem('cart', JSON.stringify(newList));
  }

  render() {
    return (
      <button
        type="button"
        data-testid="product-add-to-cart"
        onClick={ this.addItem }
      >
        Adicionar ao Carrinho
      </button>
    );
  }
}

AddToCart.propTypes = {
  product: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default AddToCart;
