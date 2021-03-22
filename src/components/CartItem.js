import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/components/CartItem.css';

class CartItem extends Component {
  render() {
    const { item, increaseQuantity, decreaseQuantity, removeItemFromCart } = this.props;
    const { thumbnail, title, price, id, amount, available_quantity: inStock } = item;
    return (
      <div className="cart-item">
        <img src={ thumbnail } alt={ `${title}` } />
        <p data-testid="shopping-cart-product-name">{ title }</p>
        <button
          type="button"
          data-testid="product-increase-quantity"
          onClick={ () => increaseQuantity(id) }
          disabled={ (inStock <= amount) }
        >
          +
        </button>
        <p data-testid="shopping-cart-product-quantity">{ amount }</p>
        <button
          type="button"
          data-testid="product-decrease-quantity"
          onClick={ () => decreaseQuantity(id) }
        >
          -
        </button>
        <p>{ `R$ ${(price * amount).toFixed(2)}` }</p>
        <button type="button" onClick={ () => removeItemFromCart(id) }>Remover</button>
      </div>
    );
  }
}

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    amount: PropTypes.number,
    available_quantity: PropTypes.number,
  }).isRequired,
  increaseQuantity: PropTypes.func.isRequired,
  decreaseQuantity: PropTypes.func.isRequired,
  removeItemFromCart: PropTypes.func.isRequired,
};

export default CartItem;
