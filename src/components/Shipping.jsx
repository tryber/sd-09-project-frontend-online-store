import React from 'react';
import PropTypes from 'prop-types';

class Shipping extends React.Component {
  render() {
    const { shipping } = this.props;
    const freeShipping = shipping.free_shipping;
    if (freeShipping === true) {
      return (
        <div>
          <span data-testid="free-shipping">
            Frete grátis!
          </span>
        </div>
      );
    }
    return '';
  }
}
Shipping.propTypes = {
  shipping: PropTypes.shape({
    free_shipping: PropTypes.bool,
  }),
}.isRequired;

export default Shipping;
