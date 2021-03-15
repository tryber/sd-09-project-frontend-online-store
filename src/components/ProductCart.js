import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductCart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productQuantity: 1,
    };
  }

  render() {
    const { title, thumbnail, price } = this.props;
    const { productQuantity } = this.state;

    return (
      <div data-testid="shopping-cart-product-name">
        <p className="products-title">{ title }</p>
        <img className="products-image" src={ thumbnail } alt={ title } />
        <p className="products-price">{ price }</p>
        <p data-testid="shopping-cart-product-quantity">
          Quantidade:
          { productQuantity }
        </p>
      </div>
    );
  }
}

ProductCart.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductCart;
