import React from 'react';
import { Link } from 'react-router-dom';
import * as API from './serviceAPI';
import CheckoutProductReview from '../components/CheckoutProductReview';
import CheckoutPaymentMethod from '../components/CheckoutPaymentMethod';

class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      cpf: '',
      email: '',
      phone: '',
      cep: '',
      address: '',
      complement: '',
      city: '',
      states: [],
    };
    this.onChange = this.onChange.bind(this);
    this.getStates = this.getStates.bind(this);
  }

  componentDidMount() {
    this.getStates();
  }

  onChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  async getStates() {
    const response = await API.getBrazilStates();
    this.setState({
      states: response,
    });
  }

  fullNameInput(fullName) {
    return (
      <input
        data-testid="checkout-fullname"
        type="text"
        placeholder="Nome Completo"
        name="fullName"
        onChange={ this.onChange }
        value={ fullName }
        required
      />
    );
  }

  cpfInput(cpf) {
    return (
      <input
        data-testid="checkout-cpf"
        type="text"
        placeholder="CPF"
        name="cpf"
        onChange={ this.onChange }
        value={ cpf }
        required
      />
    );
  }

  emailInput(email) {
    return (
      <input
        data-testid="checkout-email"
        type="email"
        placeholder="Email"
        name="email"
        onChange={ this.onChange }
        value={ email }
        required
      />
    );
  }

  phoneInput(phone) {
    return (
      <input
        data-testid="checkout-phone"
        type="text"
        placeholder="Telefone"
        name="phone"
        onChange={ this.onChange }
        value={ phone }
        required
      />
    );
  }

  cepInput(cep) {
    return (
      <input
        data-testid="checkout-cep"
        type="text"
        placeholder="CEP"
        name="cep"
        onChange={ this.onChange }
        value={ cep }
        required
      />
    );
  }

  addressInput(address) {
    return (
      <input
        data-testid="checkout-address"
        type="text"
        placeholder="Endereço"
        name="address"
        onChange={ this.onChange }
        value={ address }
        required
      />
    );
  }

  complementInput(complement) {
    return (
      <input
        data-testid="checkout-complement"
        type="text"
        placeholder="Complemento"
        name="complement"
        onChange={ this.onChange }
        value={ complement }
        required
      />
    );
  }

  cityInput(city) {
    return (
      <input
        type="text"
        placeholder="Cidade"
        name="city"
        onChange={ this.onChange }
        value={ city }
        required
      />
    );
  }

  render() {
    const {
      fullName,
      email,
      cpf,
      phone,
      cep,
      address,
      complement,
      city,
      states,
    } = this.state;
    return (
      <div>
        <div>
          <CheckoutProductReview />
          <fieldset>
            <legend>Informações do Comprador</legend>
            { this.fullNameInput(fullName) }
            { this.cpfInput(cpf) }
            { this.emailInput(email) }
            { this.phoneInput(phone) }
            { this.cepInput(cep) }
            { this.addressInput(address) }
            { this.complementInput(complement) }
            { this.cityInput(city) }
            <select required name="states">
              <option>Selecione</option>
              { states.map(({ nome, id }) => (<option key={ id }>{ nome }</option>)) }
            </select>
          </fieldset>
          <CheckoutPaymentMethod />
        </div>
        <Link to="/"><button type="submit">Finalizar Compra</button></Link>
      </div>
    );
  }
}

export default Checkout;
