import React from 'react';
import { Link } from 'react-router-dom';
import { FaAngleDoubleLeft } from 'react-icons/fa';
import * as API from './serviceAPI';
import CheckoutProductReview from '../components/CheckoutProductReview';
import CheckoutPaymentMethod from '../components/CheckoutPaymentMethod';
import '../styles/Checkout.css';

class Checkout extends React.Component {
  constructor() {
    super();
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
        className="buyerInput"
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
        className="buyerInput"
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
        className="buyerInput"
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
        className="buyerInput"
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
        className="buyerInput"
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
        className="buyerInput"
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
        className="buyerInput"
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
        className="buyerInput"
        required
      />
    );
  }

  stateInput(states) {
    return (
      <select className="buyerInput" required name="states">
        <option>Selecione</option>
        { states.map(({ nome, id }) => (<option key={ id }>{ nome }</option>)) }
      </select>
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
        <div className="backArrow">
          <Link to="/"><FaAngleDoubleLeft size={ 40 } /></Link>
        </div>
        <div className="checkoutPage">
          <CheckoutProductReview />
          <div className="checkoutPageRight">
            <fieldset className="buyerFormField">
              <legend className="checkoutLegend">2 - Informações do Comprador</legend>
              { this.fullNameInput(fullName) }
              { this.cpfInput(cpf) }
              { this.emailInput(email) }
              { this.phoneInput(phone) }
              { this.cepInput(cep) }
              { this.addressInput(address) }
              { this.complementInput(complement) }
              { this.cityInput(city) }
              { this.stateInput(states) }
            </fieldset>
            <CheckoutPaymentMethod />
          </div>
        </div>
      </div>
    );
  }
}

export default Checkout;
