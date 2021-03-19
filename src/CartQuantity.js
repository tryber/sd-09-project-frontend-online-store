import React from 'react';
import PropTypes from 'prop-types';
import './CartQuantity.css';

class CartQuantity extends React.Component {
  render() {
    const { totalProducts } = this.props;
    return (
      <span
        className="crt-size-dpl"
        data-testid="shopping-cart-size"
      >
        {totalProducts}
      </span>
    );
  }
}
CartQuantity.propTypes = {
  totalProducts: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
export default CartQuantity;
