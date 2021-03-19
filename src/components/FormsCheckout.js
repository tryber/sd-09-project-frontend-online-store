import React from 'react';

export default class FomsCheckout extends React.Component {
  render() {
    return (
      <div>
        <input
          type="input"
          placeholder="Nome Completo"
          data-testid="checkout-fullname"
        />
        <input
          type="input"
          placeholder="CPF"
          data-testid="checkout-cpf"
        />
        <input
          type="input"
          placeholder="Email"
          data-testid="checkout-email"
        />
        <input
          type="input"
          placeholder="Telefone"
          data-testid="checkout-phone"
        />
        <input
          type="input"
          placeholder="CEP"
          data-testid="checkout-cep"
        />
        <input
          type="input"
          placeholder="Endereço"
          data-testid="checkout-address"
        />
        <input type="input" placeholder="Complemento" />
        <input type="number" placeholder="Número" />
        <input type="input" placeholder="Cidade" />
      </div>
    );
  }
}
