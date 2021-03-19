import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddToCartButton extends Component {
  render() {
    const { product, testid, cartHandler: { add } } = this.props;
    delete product.attributes;

    return (
      <button
        type="submit"
        data-testid={ testid }
        onClick={ () => { add(product); } }
      >
        Adicionar ao Carrinho
      </button>
    );
  }
}

AddToCartButton.propTypes = {
  product: PropTypes.shape({
    attributes: PropTypes.arrayOf(PropTypes.object),
    id: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
    title: PropTypes.string,
    availableQuantity: PropTypes.number,
  }).isRequired,
  testid: PropTypes.string.isRequired,
  cartHandler: PropTypes.shape({
    add: PropTypes.func.isRequired,
  }).isRequired,
};
