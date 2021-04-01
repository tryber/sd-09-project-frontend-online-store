import React, { Component } from 'react';

class CheckoutForm extends Component {
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

  payment() {
    return (
      <form>
        <p>A vista</p>
        <label htmlFor="ticket">
          Boleto
          <input id="ticket" type="radio" name="payment" />
        </label>
        <p>Cartão de crédito</p>
        <label htmlFor="visa">
          Visa
          <input id="visa" type="radio" name="payment" />
        </label>
        <label htmlFor="master-card">
          MasterCard
          <input id="master-card" type="radio" name="payment" />
        </label>
        <label htmlFor="elo">
          Elo
          <input id="elo" type="radio" name="payment" />
        </label>
      </form>
    );
  }

  render() {
    return (
      <section>
        <h3>Informações do comprador</h3>
        {this.checkoutForm()}
        <h3>Forma de pagamento</h3>
        {this.payment()}
      </section>
    );
  }
}

export default CheckoutForm;
