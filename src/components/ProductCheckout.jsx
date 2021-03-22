import React from 'react';
import PropTypes from 'prop-types';

class ProductCheckout extends React.Component {
  render() {
    const { eachProduct } = this.props;
    const { title, price, thumbnail, quantity } = eachProduct;

    return (
      <div className="checkout-product-item">
        <img src={ thumbnail } alt={ title } />
        <h1>{ title }</h1>
        <p>
          { `Unitário: ${price}` }
        </p>
        <p>
          { `Quantidade: ${quantity}` }
        </p>
        <p>
          { `Total: ${price * quantity}` }
        </p>
      </div>
    );
  }
}

ProductCheckout.propTypes = {
  eachProduct: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
    thumbnail: PropTypes.string,
  }),
}.isRequired;

export default ProductCheckout;
