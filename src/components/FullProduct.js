import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class FullProduct extends Component {
  render() {
    const { match: { params: { id } }, addProductToCart } = this.props;
    const product = JSON.parse(localStorage.getItem(id));
    const { title, price, thumbnail } = product;

    return (
      <div>
        <Link to="/">Voltar</Link>
        <Link data-testid="shopping-cart-button" to="/cart">Carrinho</Link>
        <div className="title" data-testid="product-detail-name">
          <span>{title}</span>
          <span className="title">
            - R$
            {price}
          </span>
        </div>
        <img className="products-image" src={ thumbnail } alt={ title } />
        <button
          data-testid="product-detail-add-to-cart"
          type="button"
          onClick={ () => addProductToCart({ id, title, price, thumbnail }) }
        >
          Adicionar ao carrinho
        </button>
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
