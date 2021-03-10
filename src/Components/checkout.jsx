import React, { Component } from 'react';

class Checkout extends Component {
  render() {
    return (
    // receber informações dos produtos do carrinho de compras
      <div>
        <forms>
          <fieldset name="Infos">
            <legend>info</legend>
            <input
              type="text"
              data-testid="checkout-fullname"
              placeholder="Nome Completo"
            />
            <input type="text" data-testid="checkout-email" placeholder="E-mail" />
            <input type="text" data-testid="checkout-cpf" placeholder="CPF" />
            <input type="text" data-testid="checkout-phone" placeholder="Telefone" />
            <input type="text" data-testid="checkout-cep" placeholder="CEP" />
            <input type="text" data-testid="checkout-address" placeholder="Endereço" />
            <input type="text" placeholder="" />
            <input type="text" placeholder="" />
            <input type="text" placeholder="" />
            <select placeholder="Estado">
              <option value="">SP</option>
              <option value="">RJ</option>
              <option value="">DF</option>
              <option value="">AM</option>
              <option value="">RS</option>
            </select>
          </fieldset>
        </forms>
        <forms>
          <fieldset name="Infos">
            <legend>Payment</legend>
            boleto
            <input type="checkbox" />
            Cartão de Crédito
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
            PagSeguro
            <input type="checkbox" />
          </fieldset>
        </forms>
        <button type="button">Submit</button>
      </div>
    );
  }
}

export default Checkout;
