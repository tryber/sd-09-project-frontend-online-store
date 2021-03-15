import React from 'react';
import './Pages.css';

class Checkout extends React.Component {
  render() {
    return (
      <div>
        <form className="form-checkout">
          <label htmlFor="fullname">
            Nome Completo:
            <input type="text" name="fullname" data-testid="checkout-fullname" />
          </label>
          <label htmlFor="email">
            Email:
            <input type="text" name="email" data-testid="checkout-email" />
          </label>
          <label htmlFor="cpf">
            CPF:
            <input type="text" name="cpf" data-testid="checkout-cpf" />
          </label>
          <label htmlFor="phone">
            Telefone:
            <input type="text" name="phone" data-testid="checkout-phone" />
          </label>
          <label htmlFor="cep">
            CEP:
            <input type="text" name="cep" data-testid="checkout-cep" />
          </label>
          <label htmlFor="address">
            Endereço
            <input type="text" name="address" data-testid="checkout-address" />
          </label>
          <button type="button">
            Comprar
          </button>
        </form>
      </div>
    );
  }
}

export default Checkout;
