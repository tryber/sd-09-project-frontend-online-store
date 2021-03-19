import React from 'react';
import PropTypes from 'prop-types';
import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default class CartIcon extends React.Component {
  render() {
    const { cartHandler: { size } } = this.props;
    return (
      <Link
        to="/cartshop"
        data-testid="shopping-cart-button"
      >
        <FiShoppingCart />
        <span data-testid="shopping-cart-size">{ size() }</span>
      </Link>
    );
  }
}

CartIcon.propTypes = {
  cartHandler: PropTypes.shape({
    size: PropTypes.func.isRequired,
  }).isRequired,
};
