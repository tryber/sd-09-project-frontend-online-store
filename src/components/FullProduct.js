import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './FullProduct.css';
import RatingForm from './RatingForm';

class FullProduct extends Component {
  render() {
    const { match: { params: { id } }, addProductToCart } = this.props;
    const product = JSON.parse(localStorage.getItem(id));
    const { title, price, thumbnail } = product;

    return (
      <div>
        <Link className="back" to="/">Voltar</Link>
        <Link
          className="cart"
          data-testid="shopping-cart-button"
          to="/cart"
        >
          Carrinho
        </Link>
        <div className="title" data-testid="product-detail-name">
          <span className="title">{title}</span>
          <span className="separator">-</span>
          <span className="currency">R$</span>
          <span className="price">{parseFloat(price).toFixed(2)}</span>
        </div>
        <img className="products-image-full" src={ thumbnail } alt={ title } />
        <button
          className="button-cart-full"
          data-testid="product-detail-add-to-cart"
          type="button"
          onClick={ () => addProductToCart({ id, title, price, thumbnail }) }
        >
          Adicionar ao carrinho
        </button>
        <RatingForm />
      </div>
    );
  }
}
FullProduct.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  addProductToCart: PropTypes.func.isRequired,
};

export default FullProduct;
