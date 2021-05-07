import React from 'react';

class Checkout extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="checkout-fullname">
          Nome completo
          <input
            data-testid="checkout-fullname"
            type="text"
          />
        </label>
        <label htmlFor="checkout-email">
          Email
          <input
            data-testid="checkout-email"
            type="email"
          />
        </label>
        <label htmlFor="checkout-cpf">
          CPF
          <input
            data-testid="checkout-cpf"
            type="text"
          />
        </label>
        <label htmlFor="checkout-phone">
          Telefone
          <input
            data-testid="checkout-phone"
            type="text"
          />
        </label>
        <label htmlFor="checkout-phone">
          CEP
          <input
            data-testid="checkout-cep"
            type="text"
          />
        </label>
        <label htmlFor="checkout-address">
          Endereço
          <input
            data-testid="checkout-address"
            type="text"
          />
        </label>
      </form>
    );
  }
}

export default Checkout;
