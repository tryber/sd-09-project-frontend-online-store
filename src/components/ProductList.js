import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';
import '../styles/components/ProductList.css';

class ProductList extends Component {
  render() {
    const { products, addProductToCart } = this.props;
    return (
      <div className="product-list-container">
        { products.map((product) => (<ProductCard
          key={ product.id }
          product={ product }
          addProductToCart={ addProductToCart }
        />)) }
      </div>
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
  addProductToCart: PropTypes.func.isRequired,
};

export default ProductList;
