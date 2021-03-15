import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import deleteIcon from '../images/delete.png';
import plusIcon from '../images/plus.png';
import minusIcon from '../images/minus.png';
import './CartDisplay.css';

class CartDisplay extends Component {
  render() {
    const { id, remove, thumbnail, title, subtract, quantity, add,
      totalPrice } = this.props;
    return (
      <div className="items-cart" key={ id }>
        <Link to="/cart" onClick={ remove }>
          <img className="remove" src={ deleteIcon } alt="delete" id={ id } />
        </Link>
        <img className="image-cart" src={ thumbnail } width="100px" alt={ title } />
        <span
          className="title-cart"
          data-testid="shopping-cart-product-name"
        >
          { title }
        </span>
        <Link to="/cart" onClick={ subtract }>
          <img
            className="minus-icon"
            src={ minusIcon }
            alt="Subtrai"
            id={ id }
            data-testid="product-decrease-quantity"
          />
        </Link>
        <span
          className="quantity"
          data-testid="shopping-cart-product-quantity"
        >
          { quantity }
        </span>
        <Link to="/cart" onClick={ add }>
          <img
            className="plus-icon"
            src={ plusIcon }
            alt="Soma"
            id={ id }
            data-testid="product-increase-quantity"
          />
        </Link>
        <span className="currency-cart">R$</span>
        <span className="total-price">{ parseFloat(totalPrice).toFixed(2) }</span>
      </div>
    );
  }
}

CartDisplay.propTypes = ({
  id: PropTypes.string,
  remove: PropTypes.func,
  thumbnail: PropTypes.string,
  title: PropTypes.string,
  subtract: PropTypes.func,
  quantity: PropTypes.number,
  add: PropTypes.func,
  totalPrice: PropTypes.number,
}).isRequired;

export default CartDisplay;
