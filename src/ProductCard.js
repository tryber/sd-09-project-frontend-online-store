import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  render() {
    const { product, addProduct } = this.props;
    const { price, thumbnail, title } = product;
    return (
      <div data-testid="product" className="product-card hvr-grow hover-prod">
        <div className="product-details">
          <div className="product-title-div">
            <h2 className="product-title">{ title }</h2>
          </div>
          <img src={ thumbnail } alt={ title } className="product-img" />
          <div className="product-detais-card">
            <p>{ `R$ ${price}` }</p>
            <Link
              data-testid="product-detail-link"
              to={ { pathname: '/productDetails', product } }
            >
              DETALHES
            </Link>
            <button
              type="button"
              data-testid="product-add-to-cart"
              onClick={ () => addProduct(product) }
            >
              <span role="img" aria-labelledby="carrinho">🛒</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

ProductCard.propTypes = {
  addProduct: PropTypes.func.isRequired,
  product: PropTypes.shape({
    price: PropTypes.number,
    thumbnail: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};

export default ProductCard;
