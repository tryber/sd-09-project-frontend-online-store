import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CartList extends Component {
  render() {
    const { product } = this.props;
    return (
      <div className="product-item" data-testid="product">
        <img alt={ `${product.title}` } src={ product.thumbnail } />
        <h4 data-testid="shopping-cart-product-name">{product.title}</h4>
        <p data-testid="shopping-cart-product-quantity">1</p>
        <p>{ product.price }</p>
      </div>
    );
  }
}

CartList.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string,
  }).isRequired,
};

export default CartList;
