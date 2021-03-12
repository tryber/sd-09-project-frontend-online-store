import React from 'react';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  render() {
    const { product } = this.props;
    const { title, thumbnail, price } = product;
    return (
      <div data-testid="product">
        <h2>{ title }</h2>
        <img src={ thumbnail } alt="Imagen do produto" />
        <p>
          R$
          { price }
        </p>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.object,
}.isRequired;

export default ProductCard;
