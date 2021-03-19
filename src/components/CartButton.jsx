import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import cartIcon from '../Images/cartIcon.png';

class CartButton extends Component {
  render() {
    const { cart } = this.props;
    return (
      <section className="cart-button-container">
        <Link
          to="/shopping-cart"
          data-testid="shopping-cart-button"
        >
          <img
            alt="shopping-cart"
            className="shopping-cart-img"
            src={ cartIcon }
          />
        </Link>
        <div
          data-testid="shopping-cart-size"
          className="cart-count"
        >
          {cart}
        </div>
      </section>
    );
  }
}

CartButton.propTypes = {
  cart: PropTypes.number.isRequired,
};

export default CartButton;
