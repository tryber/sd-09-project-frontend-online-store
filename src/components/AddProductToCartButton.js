import React from 'react';
import PropTypes from 'prop-types';
import cart from '../services/cart';

export default class AddProductToCartButton extends React.Component {
  addToCart() {
    const product = this.props;
    cart.addToCart(product);
  }

  render() {
    return (
      <button
        type="button"
        { ...this.props }
        onClick={ () => this.addToCart() }
      >
        Adicionar ao carrinho
      </button>
    );
  }
}

AddProductToCartButton.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};
