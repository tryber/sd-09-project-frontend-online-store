import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ProductDetails extends React.Component {
  render() {
    const { location, addProduct } = this.props;
    const { product } = location;
    const { thumbnail, title } = product;
    return (
      <div data-testid="product-detail-name">
        <img src={ thumbnail } alt={ title } />
        <p>{ title }</p>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ () => addProduct(product) }
        >
          Adicionar no carrinho
        </button>
        <Link to="/shoppingcart" data-testid="shopping-cart-button">
          CARRINHO
        </Link>
      </div>

    );
  }
}

ProductDetails.propTypes = {
  addProduct: PropTypes.func.isRequired,
  location: PropTypes.shape({
    product: PropTypes.shape({
      title: PropTypes.string,
      thumbnail: PropTypes.string,
    }),
  }).isRequired,
};

export default ProductDetails;
