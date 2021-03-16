import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddToCartButton extends Component {
  render() {
    const { product, addProduct } = this.props;
    return (
      <button
        data-testid="product-add-to-cart "
        type="button"
        onClick={ () => addProduct(product) }
      >
        Adicionar ao carrinho
      </button>
    );
  }
}

AddToCartButton.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
  }),
  addProduct: PropTypes.func,
}.isRequired;

export default AddToCartButton;
