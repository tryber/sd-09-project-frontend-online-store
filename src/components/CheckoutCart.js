import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ItemCart from './ItemCart';

class CheckoutCart extends Component {
  render() {
    const { cartItems } = this.props;
    return (
      <div>
        {cartItems.map((item) => <ItemCart key={ item.id } item={ item } />)}
        <h3>Adicione seus dados:</h3>
        <label htmlFor="checkout-fullname">
          Nome completo
          <input type="text" data-testid="checkout-fullname" />
        </label>
        <label htmlFor="checkout-email">
          Email
          <input type="text" data-testid="checkout-email" />
        </label>
        <label htmlFor="checkout-cpf">
          CPF
          <input type="text" data-testid="checkout-cpf" />
        </label>
        <label htmlFor="checkout-phone">
          Telefone
          <input type="text" data-testid="checkout-phone" />
        </label>
        <label htmlFor="checkout-cep">
          CEP
          <input type="text" data-testid="checkout-cep" />
        </label>
        <label htmlFor="checkout-address">
          Endereço
          <input type="text" data-testid="checkout-address" />
        </label>
        <button type="button">Finalizar a compra</button>
      </div>
    );
  }
}

CheckoutCart.propTypes = {
  cartItems: PropTypes.arrayOf(),
}.isRequired;

export default CheckoutCart;
