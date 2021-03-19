import React, { Component } from 'react';
import Forms from '../components/Forms';
import PaymentMethod from '../components/PaymentMethod';
import ReviewCart from '../components/ReviewCart';

class Checkout extends Component {
  render() {
    return (
      <div>
        <ReviewCart />
        <Forms />
        <PaymentMethod />
        <button type="button">Finalizar compra</button>
      </div>
    );
  }
}

export default Checkout;
