import React from 'react';

class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      email: '',
      cpf: '',
      phone: '',
      cep: '',
      address: '',
      paymentMethod: '',
      cartProducts: [],
    };

    this.updateForm = this.updateForm.bind(this);
    this.renderAdress = this.renderAdress.bind(this);
    this.renderEmailAndPhone = this.renderEmailAndPhone.bind(this);
    this.renderFullNameAndCpf = this.renderFullNameAndCpf.bind(this);
    this.renderPaymentMethod = this.renderPaymentMethod.bind(this);
    this.getCart = this.getCart.bind(this);
  }

  componentDidMount() {
    this.getCart();
  }

  getCart() {
    const cart = localStorage.getItem('ShoppingCart');
    this.setState({
      cartProducts: cart,
    });
  }

  updateForm(field, newValue) {
    this.setState({ [field]: newValue });
  }

  renderFullNameAndCpf() {
    const { fullName, cpf } = this.state;
    return (
      <div>
        <label htmlFor="fullName-form">
          <input
            type="text"
            placeholder="Insira seu Nome Completo"
            isRequired
            data-testid="checkout-fullname"
            value={ fullName }
            onChange={ (event) => this.updateForm('fullName', event.target.value) }
          />
        </label>
        <label htmlFor="cpf-form">
          <input
            type="text"
            placeholder="Insira seu CPF"
            isRequired
            data-testid="checkout-cpf"
            value={ cpf }
            onChange={ (event) => this.updateForm('cpf', event.target.value) }
          />
        </label>
      </div>
    );
  }

  renderEmailAndPhone() {
    const { email, phone } = this.state;
    return (
      <div>
        <label htmlFor="email-form">
          <input
            type="email"
            placeholder="Insira seu e-mail"
            isRequired
            data-testid="checkout-email"
            value={ email }
            onChange={ (event) => this.updateForm('email', event.target.value) }
          />
        </label>
        <label htmlFor="phone-form">
          <input
            type="text"
            placeholder="Telefone"
            isRequired
            data-testid="checkout-phone"
            value={ phone }
            onChange={ (event) => this.updateForm('phone', event.target.value) }
          />
        </label>
      </div>
    );
  }

  renderAdress() {
    const { address, cep } = this.state;
    return (
      <div>
        <label htmlFor="cep-form">
          <input
            type="text"
            placeholder="CEP"
            isRequired
            data-testid="checkout-cep"
            value={ cep }
            onChange={ (event) => this.updateForm('cep', event.target.value) }
          />
        </label>
        <label htmlFor="address-form">
          <input
            type="text"
            placeholder="Endereço"
            isRequired
            data-testid="checkout-address"
            value={ address }
            onChange={ (event) => this.updateForm('address', event.target.value) }
          />
        </label>
      </div>
    );
  }

  renderPaymentMethod() {
    const { paymentMethod } = this.state;
    return (
      <div>
        <label htmlFor="payment-method">
          Método de pagamento
          <select
            name="paymentMethod"
            value={ paymentMethod }
            onChange={ (event) => this.updateForm('paymentMethod', event.target.value) }
          >
            <option value="boleto">Boleto</option>
            <option value="credit">Cartão de Crédito</option>
            <option value="debit">Cartão de Débito</option>
          </select>
        </label>
      </div>
    );
  }

  render() {
    const { cartProducts } = this.state;
    return (
      <div>
        <div>
          <h2>Revise seus Produtos</h2>
          {cartProducts}
        </div>
        <h2>Informações do Comprador</h2>
        <form className="buyer-info">
          {this.renderFullNameAndCpf()}
          {this.renderEmailAndPhone()}
          {this.renderAdress()}
        </form>
        <form className="payment-method">
          <h2>Método de Pagamento</h2>
          {this.renderPaymentMethod()}
        </form>
        <button type="button">Comprar</button>
      </div>
    );
  }
}

export default Checkout;
