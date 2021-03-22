import React, { Component } from 'react';
import '../styles/pages/Checkout.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CheckoutItem from '../components/CheckoutItem';
import BuyerInputs from '../components/BuyerInputs';
import PaymentInputs from '../components/PaymentInputs';

class Checkout extends Component {
  constructor() {
    super();
    this.state = {
      states: ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA',
        'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR',
        'RS', 'SC', 'SE', 'SP', 'TO'],
      formInput: {
        fullname: '',
        cpf: '',
        email: '',
        phone: '',
        cep: '',
        address: '',
        complement: '',
        number: '',
        city: '',
        state: '',
      },
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange({ target }) {
    const { name, value } = target;
    this.setState((prevState) => ({
      formInput: { ...prevState.formInput, [name]: value },
    }));
  }

  render() {
    const { states, formInput } = this.state;
    const {
      cartItems,
      location: { state: { totalPayable: total } },
      emptyShoppingCart,
    } = this.props;
    return (
      <div className="checkout-container">
        <div className="rewiew-products-container">
          <h2>Revise seus pedidos</h2>
          { cartItems.map((item) => <CheckoutItem item={ item } key={ item.id } />) }
          <h4>{ `Total: R$ ${(cartItems.length === 0) ? 0 : total.toFixed(2)}` }</h4>
        </div>
        <div className="buyer-information-container">
          <h2>Informações do Comprador</h2>
          <BuyerInputs
            formInput={ formInput }
            states={ states }
            handleInputChange={ this.handleInputChange }
          />
        </div>
        <div className="payment-container">
          <h2>Metódo de Pagamento</h2>
          <div>
            <PaymentInputs />
          </div>
        </div>
        <Link to="/">
          <button type="button" onClick={ emptyShoppingCart }>Comprar</button>
        </Link>
      </div>
    );
  }
}

Checkout.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  emptyShoppingCart: PropTypes.func.isRequired,
  location: PropTypes.shape({
    state: PropTypes.shape({
      totalPayable: PropTypes.number,
    }),
  }).isRequired,
};

export default Checkout;
