import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/components/BuyerInputs.css';

class BuyerInputs extends Component {
  constructor() {
    super();
    this.getInputText = this.getInputText.bind(this);
  }

  getInputText(placeholder, name, value) {
    const { handleInputChange } = this.props;
    return (
      <input
        type="text"
        placeholder={ placeholder }
        data-testid={ `checkout-${name}` }
        name={ name }
        value={ value }
        onChange={ handleInputChange }
      />
    );
  }

  render() {
    const { formInput, states, handleInputChange } = this.props;
    const { fullname, cpf, email, phone, cep, address, complement, number, city, state,
    } = formInput;
    return (
      <form className="buyer-form">
        { this.getInputText('Nome Completo', 'fullname', fullname) }
        <input
          type="text"
          placeholder="CPF"
          data-testid="checkout-cpf"
          name="cpf"
          value={ cpf }
          onChange={ handleInputChange }
          pattern="[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}"
          max="15"
        />
        <input
          type="email"
          placeholder="E-mail"
          data-testid="checkout-email"
          name="email"
          value={ email }
          onChange={ handleInputChange }
        />
        <input
          type="text"
          placeholder="Telefone"
          data-testid="checkout-phone"
          name="phone"
          value={ phone }
          onChange={ handleInputChange }
          pattern="([0-9]{2})[0-9]{5}-[0-9]{4}"
          max="13"
        />
        { this.getInputText('CEP', 'cep', cep) }
        { this.getInputText('Endereço', 'address', address) }
        { this.getInputText('Complemento', 'complement', complement) }
        { this.getInputText('Número', 'number', number) }
        { this.getInputText('Cidade', 'city', city) }
        <select name="state" value={ state } onChange={ handleInputChange }>
          <option value="" disabled>Estado</option>
          { states
            .map((item) => <option key={ item } value={ item }>{ item }</option>) }
        </select>
      </form>
    );
  }
}

BuyerInputs.propTypes = {
  formInput: PropTypes.shape({
    fullname: PropTypes.string,
    cpf: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    cep: PropTypes.string,
    address: PropTypes.string,
    complement: PropTypes.string,
    number: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
  }).isRequired,
  states: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleInputChange: PropTypes.func.isRequired,
};

export default BuyerInputs;
