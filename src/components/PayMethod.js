import './styles/style.css';
import React, { Component } from 'react';

class PayMethod extends Component {
  render() {
    const card = 'https://img.icons8.com/fluent/48/000000/bank-card-front-side.png';
    const bankSlip = 'https://img.icons8.com/fluent/48/000000/barcode.png';
    return (
      <fieldset className="pay">
        <legend>Método de Pagamento</legend>
        <div className="bankSlip">
          <p>Boleto</p>
          <label className="label" htmlFor="boleto">
            <input type="radio" value="boleto" name="method" id="boleto" />
            <img src={ bankSlip } alt="bankSlip" className="card" />
          </label>
        </div>
        <p>Cartão de Crédito</p>
        <div className="credCard">
          <label className="label" htmlFor="visa">
            <input type="radio" value="visa" name="method" id="visa" />
            Visa
            <img src={ card } alt="card" className="card" />
          </label>
          <label className="label" htmlFor="master">
            <input type="radio" value="master" name="method" id="master" />
            MasterCard
            <img src={ card } alt="card" className="card" />
          </label>
          <label className="label" htmlFor="elo">
            <input type="radio" value="elo" name="method" id="elo" />
            Elo
            <img src={ card } alt="card" className="card" />
          </label>
        </div>
      </fieldset>
    );
  }
}

export default PayMethod;
