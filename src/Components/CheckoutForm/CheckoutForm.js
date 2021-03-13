import React, { Component } from 'react';
import './CheckoutForm.css';

class CheckoutForm extends Component {
  render() {
    return (
      <form className="checkout-form">
        <label htmlFor="checkout-fullname">
          Nome completo
          <input data-testid="checkout-fullname" id="checkout-fullname" type="text" />
        </label>
        <label htmlFor="checkout-email">
          Email
          <input data-testid="checkout-email" id="checkout-email" type="text" />
        </label>
        <label htmlFor="checkout-cpf">
          CPF
          <input data-testid="checkout-cpf" id="checkout-cpf" type="text" />
        </label>
        <label htmlFor="checkout-phone">
          Telefone
          <input data-testid="checkout-phone" id="checkout-phone" type="text" />
        </label>
        <label htmlFor="checkout-cep">
          CEP
          <input data-testid="checkout-cep" id="checkout-cep" type="text" />
        </label>
        <label htmlFor="checkout-address">
          Endereço
          <input data-testid="checkout-address" id="checkout-address" type="text" />
        </label>
      </form>
    );
  }
}

export default CheckoutForm;
