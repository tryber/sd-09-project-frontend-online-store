import React from 'react';
import { FaCreditCard, FaBarcode } from 'react-icons/fa';

const PaymentMethod = () => (
  <forms>
    <fieldset>
      <legend>Formas de Pagamento</legend>
      <label htmlFor="boleto">
        <input type="radio" id="boleto" />
        <FaBarcode />
        Boleto
      </label>
      <label htmlFor="pix">
        <input type="radio" id="pix" />
        Pix
      </label>
      <p>Cartão de Crédito</p>
      <label htmlFor="elo">
        <input type="radio" id="elo" />
        <FaCreditCard />
        Elo
      </label>
      <label htmlFor="visa">
        <input type="radio" id="visa" />
        <FaCreditCard />
        Visa
      </label>
      <label htmlFor="master">
        <input type="radio" id="Master" />
        <FaCreditCard />
        Master
      </label>
      <label htmlFor="america">
        <input type="radio" id="america" />
        <FaCreditCard />
        American Express
      </label>
    </fieldset>
  </forms>
);

export default PaymentMethod;
