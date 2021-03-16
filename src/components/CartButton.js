import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class CartButton extends Component {
  render() {
    const { cartList } = this.props;
    return (
      <Link
        to={ { pathname: '/cart', state: { cartList } } }
        data-testid="shopping-cart-button"
      >
        Carrinho
      </Link>
    );
  }
}

CartButton.propTypes = {
  cartList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      image: PropTypes.string,
      price: PropTypes.number,
    }),
  ),
}.isRequired;

export default CartButton;
