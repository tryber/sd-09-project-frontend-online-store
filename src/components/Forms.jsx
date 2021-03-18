import React from 'react';
// import PropTypes from 'prop-types';

class Form extends React.Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     nomeCompleto: '',
  //   };
  // }

  render() {
    return (
      <form className="form">
        <label htmlFor="fullName">
          Nome Completo
          <textarea id="fullName" data-testid="checkout-fullname" />
        </label>

        <label htmlFor="email">
          Email
          <input id="email" type="text" data-testid="checkout-email" />
        </label>

        <label htmlFor="cpf">
          CPF
          <input id="cpf" type="text" size="11" data-testid="checkout-cpf" />
        </label>

        <label htmlFor="phone">
          Telefone
          <input id="phone" type="text" data-testid="checkout-phone" />
        </label>

        <label htmlFor="postalCode">
          CEP
          <input id="postalCode" type="text" data-testid="checkout-cep" />
        </label>

        <label htmlFor="address">
          Endereço
          <input id="address" type="text" data-testid="checkout-address" />
        </label>
      </form>
    );
  }
}

export default Form;
