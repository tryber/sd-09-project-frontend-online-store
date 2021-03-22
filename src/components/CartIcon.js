import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/CartIcon.css';
import PropTypes from 'prop-types';

class CartIcon extends Component {
  render() {
    const { cartLength } = this.props;
    return (
      <Link data-testid="shopping-cart-button" to="/shopping-cart">
        <button className="cart-icon" type="button" alt="cart-button">
          <span data-testid="shopping-cart-size">{ cartLength }</span>
        </button>
      </Link>
    );
  }
}

CartIcon.propTypes = {
  cartLength: PropTypes.number.isRequired,
};

export default CartIcon;
