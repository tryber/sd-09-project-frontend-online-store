import React, { Component } from 'react';
import PropTypes from 'prop-types';

class IncrementDecrementButton extends Component {
  render() {
    const { increaseOnClick, decreaseOnClick } = this.props;
    return (
      <section>
        <button
          onClick={ increaseOnClick }
          data-testid="product-increase-quantity"
          type="button"
        >
          +
        </button>
        <button
          onClick={ decreaseOnClick }
          data-testid="product-decrease-quantity"
          type="button"
        >
          -
        </button>
      </section>
    );
  }
}

const { func } = PropTypes;
IncrementDecrementButton.propTypes = {
  increaseOnClick: func.isRequired,
  decreaseOnClick: func.isRequired,
};

export default IncrementDecrementButton;
