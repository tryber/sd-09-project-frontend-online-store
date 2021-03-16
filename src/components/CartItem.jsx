import React from 'react';
import PropTypes from 'prop-types';

class CartItem extends React.Component {
  render() {
    const { item: { title } } = this.props;
    return (
      <li>
        <span data-testid="shopping-cart-product-name">{title}</span>
        <input
          type="number"
          step="1"
          min="1"
          data-testid="shopping-cart-product-quantity"
        />
      </li>
    );
  }
}

CartItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
  }),
};

CartItem.defaultProps = {
  item: PropTypes.shape({
    title: PropTypes.string,
  }),
};

export default CartItem;
