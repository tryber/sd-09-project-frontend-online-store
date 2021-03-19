import React from 'react';
import PropTypes from 'prop-types';
import * as functions from './functions';
import ShoppingCartBtn from './ShoppingCartBtn';
import RateProducts from './RateProducts';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    const { location } = this.props;
    const { product } = location.state;
    this.state = {
      product,

    };
  }

  render() {
    const { product } = this.state;
    return (
      <div data-testid="product">
        <p data-testid="product-detail-name">{ product.title }</p>
        <ShoppingCartBtn />
        <img src={ product.thumbnail } alt={ `Imagem da ${product.title}` } />
        <p>{ product.price }</p>
        <button
          data-testid="product-detail-add-to-cart"
          onClick={ () => functions.addToCartBtn(product) }
          type="button"
        >
          ADICIONAR AO CARRINHO
        </button>
        <RateProducts />
      </div>
    );
  }
}

ProductDetails.propTypes = {
  product: PropTypes.arrayOf(PropTypes.object).isRequired,

}.isRequired;

export default ProductDetails;
