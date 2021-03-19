import React from 'react';
import ProductsAtCart from '../services/data';

class CheckoutCart extends React.Component {
  constructor() {
    super();
    this.emptyMessage = this.emptyMessage.bind(this);
    this.renderProducts = this.renderProducts.bind(this);
    this.clientForms = this.clientForms.bind(this);
  }

  emptyMessage() {
    return <h2>Carrinho vazio</h2>;
  }

  clientForms() {
    return (
      <div>
        <label htmlFor="full-name">
          Nome Completo
          <input type="text" name="full-name" data-testid="checkout-fullname" />
        </label>
        <label htmlFor="email">
          Email
          <input type="text" name="email" data-testid="checkout-email" />
        </label>
        <label htmlFor="cpf">
          CPF
          <input type="text" name="cpf" data-testid="checkout-cpf" />
        </label>
        <label htmlFor="phone">
          Telefone
          <input type="text" name="phone" data-testid="checkout-phone" />
        </label>
        <label htmlFor="cep">
          CEP
          <input type="text" name="cep" data-testid="checkout-cep" />
        </label>
        <label htmlFor="address">
          Endereço
          <input type="text" name="address" data-testid="checkout-address" />
        </label>
      </div>
    );
  }

  renderSumOfPrices() {
    const total = ProductsAtCart
      .reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);
    return <div>{`Valor total:${total}`}</div>;
  }

  renderProducts() {
    return ProductsAtCart.map(({ title, price, quantity, productId }) => (
      <div key={ productId }>
        { `${title} Quantidade: ${quantity} Valor da Unidade: ${price}` }
      </div>
    ));
  }

  render() {
    return (
      <div>
        <div>
          <h1>Revise seus produtos</h1>
          { ProductsAtCart.length === 0 ? this.emptyMessage() : this.renderProducts() }
          {this.renderSumOfPrices()}
        </div>
        <div>
          {this.clientForms()}
        </div>
      </div>
    );
  }
}

export default CheckoutCart;
