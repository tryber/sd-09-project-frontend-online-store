import React, { Component } from 'react';

class PaymentMehod extends Component {
  render() {
    return (
      <form>
        <fieldset>
          <legend>Formas de Pagamento</legend>
          <label htmlFor="boleto">
            <input type="radio" id="boleto" name="payment" />
            Boleto
          </label>
          <label htmlFor="pix">
            <input type="radio" id="pix" name="payment" />
            Pix
          </label>
          <p>Cartão de Crédito</p>
          <label htmlFor="elo">
            <input type="radio" id="elo" name="payment" />
            Elo
          </label>
          <label htmlFor="visa">
            <input type="radio" id="visa" name="payment" />
            Visa
          </label>
          <label htmlFor="master">
            <input type="radio" id="Master" name="payment" />
            Master
          </label>
        </fieldset>
      </form>
    );
  }
}

export default PaymentMehod;
