import React, { Component } from 'react';
import RegisterForms from './forms';
import ReviewCart from './reviewCart';

class Checkout extends Component {
  render() {
    return (
      <div>
        <ReviewCart />
        <RegisterForms />
      </div>
    );
  }
}

export default Checkout;
