import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import shoppingCartIcon from '../images/shopping_cart_black.svg';

class ItemDetails extends Component {
  render() {
    const { handleCart, sumToCart, itemsQtt, location: { state: { item } } } = this.props;
    return (
      <div>
        <div>
          <Link to="/shopping-cart" data-testid="shopping-cart-button">
            <img src={ shoppingCartIcon } alt="Icone do Carrinho de Compras" />
            <p data-testid="shopping-cart-size">{ itemsQtt }</p>
          </Link>
          <h2 data-testid="product-detail-name">{item.title}</h2>
          <button
            type="button"
            onClick={ () => {
              handleCart(item);
              sumToCart(1);
            } }
            data-testid="product-detail-add-to-cart"
          >
            Adicionar ao Carrinho
          </button>
        </div>
        <div>
          <label htmlFor="product-detail-evaluation">
            Escreva algo sobre o produto
            <textarea data-testid="product-detail-evaluation" />
          </label>
        </div>
      </div>
    );
  }
}

ItemDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      item: PropTypes.string,
    }),
  }),
  handleCart: PropTypes.func,
  sumToCart: PropTypes.func,
}.isRequired;

export default ItemDetails;
