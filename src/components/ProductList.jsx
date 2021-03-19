import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';
import '../componentStyles/ProductList.css';

class ProductsList extends React.Component {
  render() {
    const { productsFromQuery, addProductToCart, itensAddToCart } = this.props;
    return (
      <div className="products-list">
        { productsFromQuery
          .map((product) => (<ProductCard
            data={ product }
            key={ product.id }
            addProductToCart={ addProductToCart }
            itensAddToCart={ itensAddToCart }
          />)) }
      </div>
    );
  }
}

ProductsList.propTypes = {
  productsFromQuery: PropTypes.arrayOf(PropTypes.object).isRequired,
  addProductToCart: PropTypes.func.isRequired,
  itensAddToCart: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProductsList;
