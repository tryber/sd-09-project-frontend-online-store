import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as functions from './functions';

class ProductsCard extends React.Component {
  render() {
    const { product } = this.props;
    return (
      <div data-testid="product">
        <img src={ product.thumbnail } alt={ `Imagem da ${product.title}` } />
        <p>{ product.title }</p>
        <p>{ product.price }</p>
        <button
          data-testid="product-add-to-cart"
          onClick={ () => functions.addToCartBtn(product) }
          type="button"
        >
          ADICIONAR AO CARRINHO
        </button>
        <Link
          data-testid="product-detail-link"
          to={ {
            pathname: '/productdetails',
            state: { product },
          } }
        >
          <button type="button">DETALHES</button>
        </Link>
      </div>
    );
  }
}

ProductsCard.propTypes = {
  product: PropTypes.arrayOf(PropTypes.object).isRequired,

}.isRequired;

export default ProductsCard;
