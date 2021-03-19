import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import cart from '../services/cart';

class ProductList extends React.Component {
  constructor() {
    super();
    this.click = this.click.bind(this);
  }

  click(data) {
    cart(data);
  }

  render() {
    const { products } = this.props;
    return (
      <div className="items">
        { products.map((product) => (
          <div key={ product.id }>
            <Link
              to={ { pathname: `/details/${product.id}`, state: { product } } }
              key={ product.id }
              data-testid="product-detail-link"
            >
              <ProductCard
                key={ product.id }
                product={ product }
              />
            </Link>
            <button
              type="button"
              value={ product.id }
              onClick={ () => this.click(product) }
              data-testid="product-add-to-cart"
            >
              Adicionar
            </button>
          </div>
        ))}
      </div>
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProductList;
