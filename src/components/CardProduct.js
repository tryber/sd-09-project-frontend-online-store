import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AddProductToCartButton from './AddProductToCartButton';

class CardProduct extends React.Component {
  render() {
    const { product } = this.props;
    return (
      <section data-testid="product">
        <div><h2>{ product.title }</h2></div>
        <img src={ product.thumbnail } alt="Imagen Produto" />
        <span>
          {`R$ ${product.price}` }
        </span>
        <Link
          data-testid="product-detail-link"
          to={ `/details-page/${product.id}` }
        >
          Ver Detalhes

        </Link>
        <AddProductToCartButton data-testid="product-add-to-cart" product={ product } />
      </section>
    );
  }
}

CardProduct.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default CardProduct;
