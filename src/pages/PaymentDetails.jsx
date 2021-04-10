import React from 'react';
import { FaBarcode, FaCreditCard } from 'react-icons/fa';
import { arrayOf, object } from 'prop-types';
import './PaymentDetails.css';

class PaymentDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: '',
      CPF: '',
      email: '',
      phoneNumber: '',
      zipCode: '',
      adress: '',
      complement: '',
      adressNumber: '',
      city: '',
      state: '',
    };

    this.renderCartReview = this.renderCartReview.bind(this);
    this.renderBuyerInfo1 = this.renderBuyerInfo1.bind(this);
    this.renderBuyerInfo2 = this.renderBuyerInfo2.bind(this);
    this.renderPaymentMethod = this.renderPaymentMethod.bind(this);
    this.handleTextInput = this.handleTextInput.bind(this);
  }

  handleTextInput({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  renderCartReview() {
    const { location: { state: { cartProducts } } } = this.props;
    return (
      <div>
        { cartProducts.map(({ id, title, thumbnail, price }) => (
          <div key={ id } className="cart-review">
            <img src={ thumbnail } alt="" />
            <p>{ title }</p>
            <p>{ `R$ ${price.toFixed(2)}` }</p>
          </div>
        ))}
      </div>
    );
  }

  renderBuyerInfo1() {
    const { fullName, CPF, email, phoneNumber, zipCode } = this.state;
    return (
      <div>
        <input
          type="text"
          placeholder="Nome Completo"
          onChange={ this.handleTextInput }
          name="fullName"
          value={ fullName }
          data-testid="checkout-fullname"
        />
        <input
          type="text"
          placeholder="CPF"
          onChange={ this.handleTextInput }
          name="CPF"
          value={ CPF }
          data-testid="checkout-cpf"
        />
        <input
          type="text"
          placeholder="Email"
          onChange={ this.handleTextInput }
          name="email"
          value={ email }
          data-testid="checkout-email"
        />
        <input
          type="text"
          placeholder="Telefone"
          onChange={ this.handleTextInput }
          name="phoneNumber"
          value={ phoneNumber }
          data-testid="checkout-phone"
        />
        <input
          type="text"
          placeholder="Cep"
          onChange={ this.handleTextInput }
          name="zipCode"
          value={ zipCode }
          data-testid="checkout-cep"
        />
      </div>
    );
  }

  renderBuyerInfo2() {
    const { adress, complement, adressNumber, city, state } = this.state;
    return (
      <div>
        <input
          type="text"
          placeholder="Endereço"
          onChange={ this.handleTextInput }
          name="adress"
          value={ adress }
          data-testid="checkout-address"
        />
        <input
          type="text"
          placeholder="Complemento"
          onChange={ this.handleTextInput }
          name="complement"
          value={ complement }
        />
        <input
          type="text"
          placeholder="Número"
          onChange={ this.handleTextInput }
          name="adressNumber"
          value={ adressNumber }
        />
        <input
          type="text"
          placeholder="Cidade"
          onChange={ this.handleTextInput }
          name="city"
          value={ city }
        />
        <input
          type="text"
          placeholder="Estado"
          onChange={ this.handleTextInput }
          name="state"
          value={ state }
        />
        {/* <select>

        </select> */}
      </div>
    );
  }

  renderPaymentMethod() {
    return (
      <div className="payment-methods">
        <div>
          Boleto
          <label htmlFor="bar-code-radio">
            <input type="radio" id="bar-code-radio" />
            <FaBarcode />
          </label>
        </div>
        <div>
          Cartão de Crédito
          <label htmlFor="credit-card-visa">
            <input type="radio" id="credit-card-visa" />
            Visa
            <FaCreditCard className="paymen-method-icon" />
          </label>
          <label htmlFor="credit-card-master">
            <input type="radio" id="credit-card-master" />
            MasterCard
            <FaCreditCard className="paymen-method-icon" />
          </label>
          <label htmlFor="credit-card-elo">
            <input type="radio" id="credit-card-elo" />
            Elo
            <FaCreditCard className="paymen-method-icon" />
          </label>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <fieldset>
          <strong>Revise seus produtos</strong>
          {this.renderCartReview()}
        </fieldset>
        <fieldset>
          <strong>Informações do Comprador</strong>
          {this.renderBuyerInfo1()}
          {this.renderBuyerInfo2()}
        </fieldset>
        <fieldset>
          <strong>Método de Pagamento</strong>
          {this.renderPaymentMethod()}
        </fieldset>
        <button type="button">Comprar</button>
      </div>
    );
  }
}

PaymentDetails.propTypes = {
  cartProducts: arrayOf(object),
}.isRequired;

export default PaymentDetails;
