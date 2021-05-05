import React from 'react';
import PropTypes from 'prop-types';
import Product from './Product';

class Products extends React.Component {
  render() {
    const { products } = this.props;

    if (products.length === 0) {
      return <div>Nenhum produto foi encontrado.</div>;
    }
    if (products) {
      return products
        .map((product) => (
          <Product key={ product.id } product={ product } tag="product-add-to-cart" />
        ));
    }
  }
}

Products.propTypes = { products: PropTypes.object }.isRequired;

export default Products;
