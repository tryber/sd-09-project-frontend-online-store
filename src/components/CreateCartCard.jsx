import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CreateCartCard extends Component {
  render() {
    const { product: { quant, title, thumbnail, price } } = this.props;
    return (
      <div data-testid="product">
        <h3 data-testid="shopping-cart-product-name" className="card-title">{ title }</h3>
        <div className="image">
          <img src={ thumbnail } alt={ `Imagem de ${title}` } />
        </div>
        <p>
          R$
          { price }
        </p>
        <p data-testid="shopping-cart-product-quantity">
          { quant }
          {' '}
          unidade(s)
        </p>
      </div>
    );
  }
}

CreateCartCard.propTypes = {
  product: PropTypes.shape({
    quant: PropTypes.number,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default CreateCartCard;
