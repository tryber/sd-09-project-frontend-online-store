import React, { Component } from 'react';
import '../styles/components/PaymentInputs.css';

class PaymentInputs extends Component {
  render() {
    return (
      <>
        <div className="code-bar-container">
          <h4>Boleto</h4>
          <div>
            <label htmlFor="code-bar">
              <input type="radio" name="payment" id="code-bar" />
              Boleto
            </label>
            <img src="/images/icons8-código-de-barras-100.png" alt="boleto" />
          </div>
        </div>
        <div className="credit-card-container">
          <h4>Cartão de Credito</h4>
          <div>
            <label htmlFor="visa">
              <input type="radio" name="payment" id="visa" />
              Visa
            </label>
            <img src="/images/icons8--cartão-de-credito.png" alt="cartão de crédito" />
            <label htmlFor="mastercard">
              <input type="radio" name="payment" id="mastercard" />
              Mastercard
            </label>
            <img src="/images/icons8--cartão-de-credito.png" alt="cartão de crédito" />
            <label htmlFor="elo">
              <input type="radio" name="payment" id="elo" />
              Elo
            </label>
            <img src="/images/icons8--cartão-de-credito.png" alt="cartão de crédito" />
          </div>
        </div>
      </>
    );
  }
}

export default PaymentInputs;
