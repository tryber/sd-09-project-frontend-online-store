import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class CardItem extends Component {
  render() {
    const { item, handleCart, sumToCart } = this.props;
    const { title, price, thumbnail, id, shipping } = item;
    return (
      <div data-testid="product">
        <Link
          to={ {
            pathname: `/details/${id}`,
            state: { item },
          } }
          data-testid="product-detail-link "
        >
          <h4>{ title }</h4>
          {shipping.free_shipping
            ? <h5 data-testid="free-shipping">Frete grátis</h5>
            : ''}
          <p>{ price }</p>
          <img src={ thumbnail } alt={ title } />
        </Link>
        <button
          type="button"
          onClick={ () => {
            handleCart(item);
            sumToCart(1);
          } }
          data-testid="product-add-to-cart"
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}

CardItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
    id: PropTypes.string,
  }),
  handleCart: PropTypes.func,
  sumToCart: PropTypes.func,
}.isRequired;

export default CardItem;
