import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Product from './Product';

class ProductDetails extends Component {
  render() {
    const { title, condition, product } = this.props;
    return (
      <div>
        <Product product={ product } tag="product-detail-add-to-cart" />
        <h3 data-testid="product-detail-name">{ title }</h3>
        <h4>Especificações Técnicas: </h4>
        <ul>
          <li>{ condition }</li>
        </ul>
        <Link data-testid="shopping-cart-button" to="/meucarrinho">Carrinho</Link>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  price: PropTypes.string,
  condition: PropTypes.string,
  product: PropTypes.object,
}.isRequired;

export default ProductDetails;
