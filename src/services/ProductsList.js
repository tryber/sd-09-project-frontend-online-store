import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

class ProductsList extends React.Component {
  render() {
    const { productsList: { results } } = this.props;
    return (
      <div>
        { results.map((product) => (
          <ProductCard
            key={ product.id }
            product={ product }
          />
        ))}
      </div>
    );
  }
}

ProductsList.propTypes = {
  productsList: PropTypes.object.isRequired,

}.isRequired;

export default ProductsList;
