import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PayForm extends Component {
  render() {
    const { handleChange } = this.props;
    return (
      <section>
        Método de Pagamento
        <div>
          <label htmlFor="boleto">
            <input
              onChange={ handleChange }
              type="radio"
              name="pagamento"
              id="boleto"
              value="boleto"
            />
            {' '}
          </label>
          <label htmlFor="cartao">
            Cartão de crédito
            <input
              onChange={ handleChange }
              type="radio"
              name="pagamento"
              value="visa"
            />
            {' '}
            Visa
            <input
              onChange={ handleChange }
              type="radio"
              name="pagamento"
              value="mastercard"
            />
            {' '}
            Mastercard
            <input
              onChange={ handleChange }
              type="radio"
              name="pagamento"
              value="elo"
            />
            {' '}
            Elo
          </label>
        </div>
      </section>
    );
  }
}

PayForm.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default PayForm;
