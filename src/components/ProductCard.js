import React, { Component } from 'react';
import '../styles/components/ProductCard.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends Component {
  render() {
    const { product, addProductToCart } = this.props;
    const { title, thumbnail, price, id, shipping } = product;
    const { free_shipping: freeShipping } = shipping;
    return (
      <div className="product-card" data-testid="product">
        <Link
          to={ `/productDetails/${id}` }
          data-testid="product-detail-link"
          product={ product }
        >
          <img src={ thumbnail } alt={ `${title}` } />
          <p>{ title }</p>
          <p>{ `R$ ${price.toFixed(2)}` }</p>
        </Link>
        { (freeShipping) && <span data-testid="free-shipping">Frete Grátis</span> }
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ () => addProductToCart(id) }
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string,
    shipping: PropTypes.shape({
      free_shipping: PropTypes.bool,
    }),
  }).isRequired,
  addProductToCart: PropTypes.func.isRequired,
};

export default ProductCard;
