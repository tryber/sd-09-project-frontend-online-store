import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProductRating from './ProductRating';

class Detalhes extends React.Component {
  render() {
    const {
      addToCart,
      handleCartItemsQuantity,
      cartItemsQuantity,
      location: {
        state: {
          detalhes: {
            id,
            price,
            thumbnail,
            title,
            availableQuantity,
            freeShipping,
          },
        },
      },
    } = this.props;
    return (
      <div data-testid="product" key={ id }>
        <Link data-testid="shopping-cart-button" to="/carrinho">
          <i className="fas fa-shopping-cart" />
          <span data-testid="shopping-cart-size">{cartItemsQuantity}</span>
        </Link>
        <h4 data-testid="product-detail-name">{ title }</h4>
        <img src={ thumbnail } alt={ title } />
        <p>{`R$ ${price}`}</p>
        <p>
          Quantidade em estoque:
          { availableQuantity }
        </p>
        { freeShipping && <h4 data-testid="free-shipping">Frete grátis</h4>}
        <button
          data-testid="product-detail-add-to-cart"
          type="button"
          onClick={ (event) => {
            addToCart({ title, thumbnail, price, id, availableQuantity }, event);
            handleCartItemsQuantity(1);
          } }
        >
          Adicionar ao carrinho
        </button>
        <ProductRating />
      </div>
    );
  }
}

export default Detalhes;

Detalhes.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      detalhes: PropTypes.shape({
        id: PropTypes.string,
        price: PropTypes.string,
        thumbnail: PropTypes.string,
        title: PropTypes.string,
        availableQuantity: PropTypes.number,
      }),
    }),
  }),
}.isRequired;
