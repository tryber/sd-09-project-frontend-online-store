import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

class ProductList extends React.Component {
  render() {
    const { products, listProduct, addProduct } = this.props;
    return (
      <div className="product-list">
        {products
          .map((product) => (<ProductCard
            key={ product.id }
            product={ product }
            listProduct={ listProduct }
            addProduct={ addProduct }
          />))}
      </div>
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  listProduct: PropTypes.arrayOf(PropTypes.object).isRequired,
  addProduct: PropTypes.func.isRequired,
};

export default ProductList;
