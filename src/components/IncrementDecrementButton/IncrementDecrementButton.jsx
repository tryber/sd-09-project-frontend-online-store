import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

class IncrementDecrementButton extends Component {
  constructor(props) {
    super(props);
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
  }

  increase() {
    const { updateQuantity, value } = this.props;
    updateQuantity(value + 1);
  }

  decrease() {
    const { updateQuantity, value } = this.props;
    updateQuantity(value - 1);
  }

  render() {
    const { value, maxValue } = this.props;
    return (
      <section>
        <Button
          dataTestId
          submit={ false }
          id="product-decrease-quantity"
          onHandleClick={ this.decrease }
          disabled={ value === 0 }
        >
          -
        </Button>
        <span data-testid="shopping-cart-product-quantity">{ value }</span>
        <Button
          dataTestId
          submit={ false }
          id="product-increase-quantity"
          onHandleClick={ this.increase }
          disabled={ value === maxValue }
        >
          +
        </Button>
      </section>
    );
  }
}

const { func, number } = PropTypes;
IncrementDecrementButton.propTypes = {
  updateQuantity: func.isRequired,
  value: number.isRequired,
  maxValue: number.isRequired,
};

export default IncrementDecrementButton;
