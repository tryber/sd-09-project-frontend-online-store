import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './productCard.css';

class ProductCard extends Component {
  render() {
    const { product } = this.props;
    const { title, thumbnail, price } = product;
    return (
      <li data-testid="product" className="productCardContainer">
        <h4>{ title }</h4>
        <img src={ thumbnail } alt={ `foto-${title}` } />
        <p>{ price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) }</p>
      </li>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.objectOf().isRequired,
};

export default ProductCard;
