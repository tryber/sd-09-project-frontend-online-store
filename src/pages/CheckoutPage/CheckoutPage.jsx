import React, { Component } from 'react';

class CheckoutPage extends Component {
  checkoutForm() {
    return (
      <form>
        <label htmlFor="name">
          <input data-testid="checkout-fullname" id="name" type="text" />
          Nome:
        </label>
        <label htmlFor="email">
          <input data-testid="checkout-email" id="email" type="text" />
          Email:
        </label>
        <label htmlFor="cpf">
          <input data-testid="checkout-cpf" id="cpf" type="text" />
          CPF:
        </label>
        <label htmlFor="phone">
          <input data-testid="checkout-phone" id="phone" type="text" />
          Telefone:
        </label>
        <label htmlFor="cep">
          <input data-testid="checkout-cep" id="cep" type="text" />
          Telefone:
        </label>
        <label htmlFor="address">
          <input data-testid="checkout-address" id="address" type="text" />
          Endereço:
        </label>
      </form>
    );
  }

  render() {
    return (this.checkoutForm());
  }
}

export default CheckoutPage;
