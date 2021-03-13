import React, { Component } from 'react';
import { number } from 'prop-types';

class CounterCard extends Component {
  render() {
    const { total = 0 } = this.props;
    return (
      <div data-testid="shopping-cart-size">{ total }</div>
    );
  }
}

CounterCard.propTypes = {
  total: number.isRequired,
};

export default CounterCard;
