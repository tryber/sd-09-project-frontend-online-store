import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AddToCartButton from './AddToCartButton';

class ProductCard extends Component {
  render() {
    const { products, addProduct } = this.props;
    return (
      <div>
        {products.length !== 0 ? (
          products.map((product) => (
            <div key={ product.id }>
              <Link
                to={ { pathname: `/product/${product.id}`, state: { product } } }
                data-testid="product-detail-link"
              >
                <div data-testid="product">
                  <p>{ product.title }</p>
                  <img src={ product.thumbnail } alt="product" />
                  <p>{ product.price }</p>
                </div>
              </Link>
              <AddToCartButton
                product={ product }
                addProduct={ addProduct }
              />
            </div>
          ))
        ) : (
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        )}
      </div>
    );
  }
}

ProductCard.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      image: PropTypes.string,
      price: PropTypes.number,
    }),
  ),
}.isRequired;

export default ProductCard;
