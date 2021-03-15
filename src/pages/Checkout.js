import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Checkout.css';

class Checkout extends Component {
  constructor(props) {
    super(props);

    this.state = ({
      fullName: '',
      email: '',
      cpf: '',
      phone: '',
      cep: '',
      address: '',
      paymentMethod: '',
    });

    this.handleChange = this.handleChange.bind(this);
    this.renderBuyerInformation = this.renderBuyerInformation.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  }

  renderBuyerInformation() {
    const { fullName, email, cpf, phone, cep } = this.state;
    return (
      <div className="buyer-information-container">
        <h3>Informações do Comprador</h3>
        <input
          data-testid="checkout-fullname"
          type="text"
          name="fullName"
          onChange={ this.handleChange }
          value={ fullName }
          placeholder="Nome Completo"
        />
        <input
          data-testid="checkout-email"
          type="text"
          name="email"
          onChange={ this.handleChange }
          value={ email }
          placeholder="Email"
        />
        <input
          data-testid="checkout-cpf"
          type="text"
          name="cpf"
          onChange={ this.handleChange }
          value={ cpf }
          placeholder="CPF"
        />
        <input
          data-testid="checkout-phone"
          type="text"
          name="phone"
          onChange={ this.handleChange }
          value={ phone }
          placeholder="Telefone"
        />
        <input
          data-testid="checkout-cep"
          type="text"
          name="cep"
          onChange={ this.handleChange }
          value={ cep }
          placeholder="CEP"
        />
        { this.renderAddress() }
      </div>
    );
  }

  renderAddress() {
    const { address } = this.state;
    return (
      <input
        data-testid="checkout-address"
        type="text"
        name="address"
        onChange={ this.handleChange }
        value={ address }
        placeholder="Endereço"
      />
    );
  }

  renderPaymentMethod() {
    const { paymentMethod } = this.state;
    return (
      <div className="payment-method-container">
        <h3>Método de Pagamento</h3>
        <p>Boleto</p>
        <label htmlFor="boleto">
          <input
            type="checkbox"
            name="paymentMethod"
            id="boleto"
            onChange={ this.handleChange }
            onClick={ this.handleClick }
            value="boleto"
            checked={ paymentMethod === 'boleto' }
          />
          Imagem pra representar boleto
        </label>
        <p>Cartão de Crédito</p>
        <label htmlFor="visa">
          <input
            type="checkbox"
            name="paymentMethod"
            id="visa"
            onChange={ this.handleChange }
            onClick={ this.handleClick }
            value="visa"
            checked={ paymentMethod === 'visa' }
          />
          Visa
        </label>
        <label htmlFor="mastercard">
          <input
            type="checkbox"
            name="paymentMethod"
            id="mastercard"
            onChange={ this.handleChange }
            onClick={ this.handleClick }
            value="mastercard"
            checked={ paymentMethod === 'mastercard' }
          />
          MasterCard
        </label>
      </div>
    );
  }

  render() {
    const {
      location: { state: { quantity, shoppingCartIdList, totalValue } } } = this.props;
    return (
      <div className="checkout-container">
        <div className="product-overview-container">
          <h3>Revise seus Produtos</h3>
          <ul>
            { shoppingCartIdList.map(({ title, id, price }) => (
              <li
                key={ id }
                className="list-item"
              >
                {`Produto: ${title} -- Valor: R$ ${price} -- Quantidade: ${quantity[id]}`}
              </li>
            ))}
            <h4>
              Valor total:
              R$
              { totalValue }
            </h4>
          </ul>
        </div>
        { this.renderBuyerInformation() }
        { this.renderPaymentMethod() }
        <Link to="./">
          <button type="button" className="finish-buy-btn">Finalizar Compra</button>
        </Link>
      </div>
    );
  }
}

Checkout.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      quantity: PropTypes.shape({}),
      shoppingCartIdList: PropTypes.arrayOf(PropTypes.object),
      totalValue: PropTypes.number,
    }),
  }).isRequired,
};

export default Checkout;
