import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddToCart extends Component {
  constructor() {
    super();

    this.addItemToCart = this.addItemToCart.bind(this);
  }

  addItemToCart() {
    const { itemCart, update } = this.props;
    const initialQuatity = { quant: 1 };
    const customID = { custom: `${itemCart.id}_itemCart_${localStorage.length}` };
    localStorage.setItem(
      `${itemCart.id}_itemCart_${localStorage.length}`,
      `${JSON.stringify({ ...customID, ...initialQuatity, ...itemCart })}`,
    );
    update();
  }

  render() {
    const { testId } = this.props;
    return (
      <button
        type="button"
        data-testid={ testId }
        onClick={ this.addItemToCart }
      >
        Adicionar ao Carrinho
      </button>
    );
  }
}

AddToCart.propTypes = {
  itemCart: PropTypes.shape().isRequired,
  testId: PropTypes.string.isRequired,
  update: PropTypes.func.isRequired,
};

export default AddToCart;
