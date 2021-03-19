import React, { Component } from 'react';
import PropTypes from 'prop-types';
import reshapeObjects from '../services/objects';
import LoadingMsg from './LoadingMsg';
import ProductCard from './ProductCard';
import AddToCartButton from './AddToCartButton';

require('./SearchResults.css');

export default class SearchResults extends Component {
  render() {
    const { results, loading, cartHandler } = this.props;
    const products = reshapeObjects(results);

    return (
      <div className="list">
        { loading
          ? <LoadingMsg />
          : products.map((product) => (
            <ProductCard
              product={ product }
              key={ product.id }
            >
              <AddToCartButton
                product={ product }
                cartHandler={ cartHandler }
                testid="product-add-to-cart"
              />
            </ProductCard>
          ))}
      </div>
    );
  }
}

SearchResults.propTypes = {
  loading: PropTypes.bool.isRequired,
  results: PropTypes.arrayOf(PropTypes.object).isRequired,
  cartHandler: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.object,
    ).isRequired,
    add: PropTypes.func.isRequired,
    size: PropTypes.func.isRequired,
    total: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
    changeQuantityOf: PropTypes.func.isRequired,
  }).isRequired,
};
