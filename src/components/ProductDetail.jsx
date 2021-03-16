import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductDetail extends React.Component {
  render() {
    const { location: { state: { product } } } = this.props;

    return (
      <section className="product-detail-container">
        <span data-testid="product-detail-name">{product.title}</span>
        <img src={ product.thumbnail } alt={ product.title } />
        <p>{`R$ ${product.price}`}</p>
        <Link
          to={ { pathname: '/cart', state: { product } } }
          data-testid="product-add-to-cart"
        >
          <button
            type="button"
            data-testid="shopping-cart-button"
          >
            Adicionar ao Carrinho
          </button>
        </Link>
      </section>
    );
  }
}

ProductDetail.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      product: PropTypes.shape({
        title: PropTypes.string,
        thumbnail: PropTypes.string,
        price: PropTypes.number,
      }),
    }),
  }),
};

ProductDetail.defaultProps = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      product: PropTypes.shape({
        title: PropTypes.string,
        thumbnail: PropTypes.string,
        price: PropTypes.number,
      }),
    }),
  }),
};

export default ProductDetail;
