import React from 'react';

class Checkout extends React.Component {
  render() {
    return (
      <div>
        <input type="text" placeholder="Nome Completo" data-testid="checkout-fullname" />
        <input type="text" placeholder="CPF" data-testid="checkout-cpf" />
        <input type="text" placeholder="E-mail" data-testid="checkout-email" />
        <input type="text" placeholder="Telefone" data-testid="checkout-phone" />
        <input type="text" placeholder="CEP" data-testid="checkout-cep" />
        <input type="text" placeholder="Endereço" data-testid="checkout-address" />
      </div>
    );
  }
}

export default Checkout;
