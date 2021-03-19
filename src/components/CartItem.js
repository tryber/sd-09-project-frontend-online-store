import React, { Component } from 'react';
import { AiFillPlusCircle, AiFillMinusCircle, AiFillDelete } from 'react-icons/ai';
import PropTypes from 'prop-types';

require('./CartItem.css');

export default class CartItem extends Component {
  render() {
    const {
      item: { title, thumbnail, quantity, price },
      index,
      changeQuantity,
      removeItem,
    } = this.props;
    const formattedTotal = (price * quantity).toFixed(2).replace('.', ',');
    return (
      <article className="CartItem__Container">
        <AiFillDelete onClick={ () => removeItem({ index }) } />
        <div><img src={ thumbnail } alt={ title } /></div>
        <div data-testid="shopping-cart-product-name">{ title }</div>
        <div>
          <AiFillMinusCircle
            data-testid="product-decrease-quantity"
            onClick={ () => changeQuantity({ index }, '-') }
          />
          <span data-testid="shopping-cart-product-quantity">
            { quantity }
          </span>
          <AiFillPlusCircle
            data-testid="product-increase-quantity"
            onClick={ () => changeQuantity({ index }, '+') }
          />
        </div>
        <div>
          { ` R$ ${formattedTotal}` }
        </div>
      </article>
    );
  }
}

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
    title: PropTypes.string,
    availableQuantity: PropTypes.number,
    quantity: PropTypes.number,
  }).isRequired,
  index: PropTypes.number.isRequired,
  changeQuantity: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
};
