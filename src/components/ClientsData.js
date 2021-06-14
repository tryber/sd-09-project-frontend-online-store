import React, { Component } from 'react';
import PayMethod from './PayMethod';

class ClientsData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: {
        name: '',
        cpf: '',
        email: '',
        telefone: '',
        cep: '',
        endereco: '',
        complemento: '',
        numero: '',
        cidade: '',
        estado: '',
      },
    };

    this.handleChange = this.handleChange.bind(this);
    this.onTag = this.onTag.bind(this);
    this.checkForm = this.checkForm.bind(this);
    this.home = this.home.bind(this);
  }

  handleChange({ target: { value, name } }) {
    this.setState((prevState) => ({
      userData: {
        ...prevState.userData,
        [name]: value,
      },
    }));
  }

  onTag(keyName, tagName, placeholder, testid) {
    return (
      <input
        name={ tagName }
        placeholder={ placeholder }
        type="text"
        value={ keyName }
        onChange={ this.handleChange }
        data-testid={ testid }
        className={ tagName }
      />
    );
  }

  home() {
    window.location.href = '/';
  }

  checkForm() {
    const { userData } = this.state;
    if (!Object.values(userData).some((el) => el === '')) {
      localStorage.clear();
      return this.home();
    }
    return console.log('Formulário incompleto');
  }

  render() {
    const { name, cpf, email, telefone, cep, endereco,
      complemento, numero, cidade, estado } = this.state;
    return (
      <form className="form">
        <fieldset className="client">
          <legend>Informações do Comprador</legend>
          <div className="div1">
            { this.onTag(name, 'name', 'Nome Completo', 'checkout-fullname') }
            { this.onTag(cpf, 'cpf', 'CPF', 'checkout-cpf') }
            { this.onTag(email, 'email', 'Email', 'checkout-email') }
            { this.onTag(telefone, 'telefone', 'Telefone', 'checkout-phone') }
          </div>
          <div className="div2">
            { this.onTag(cep, 'cep', 'CEP', 'checkout-cep') }
            { this.onTag(endereco, 'endereco', 'Endereço', 'checkout-address') }
          </div>
          <div className="div3">
            { this.onTag(complemento, 'complemento', 'Complemento') }
            { this.onTag(numero, 'numero', 'Número') }
            { this.onTag(cidade, 'cidade', 'Cidade') }
            <select name="estado" value={ estado } onChange={ this.handleChange }>
              <option>Estado</option>
              <option value="São Paulo">São Paulo</option>
              <option value="Minas Gerais">Minas Gerais</option>
              <option value="Rio de Janeiro">Rio de Janeiro</option>
            </select>
          </div>
        </fieldset>
        <PayMethod />
        <button
          type="button"
          data-testid="checkout-products"
          onClick={ this.checkForm }
          className="buy"
        >
          Comprar
        </button>
      </form>
    );
  }
}

export default ClientsData;
