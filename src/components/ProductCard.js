import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  render() {
    const { product } = this.props;
    // (category_id: categoryId) - code review SantosDiv
    const { id, title, thumbnail, price, category_id: categoryId } = product;
    return (
      <Link to={ `product/${categoryId}/${id}` }>
        <div data-testid="product-detail-link">
          <h2 data-testid="product">{ title }</h2>
          <img src={ thumbnail } alt="Imagen do produto" />
          <p>
            R$
            { price }
          </p>
        </div>
      </Link>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.object,
}.isRequired;

export default ProductCard;
