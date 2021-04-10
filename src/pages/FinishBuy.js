import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/FinishBuy.css';

class FinishBuy extends React.Component {
  constructor(props) {
    super(props);
    this.renderProducts = this.renderProducts.bind(this);
    this.renderProduct = this.renderProduct.bind(this);
    this.renderForm = this.renderForm.bind(this);
    this.renderPay = this.renderPay.bind(this);
    this.state = {
      products: JSON.parse(localStorage.getItem('cartItems')),
    };
  }

  sumTotalItems() {
    const { products } = this.state;
    return products
      .reduce((total, currentValue) => total + currentValue.price * currentValue.qtd, 0);
  }

  renderProduct(item) {
    return (
      <div key={ item.id } className="container-item">
        <img src={ item.thumbnail } alt="item" width="50px" />
        <p>{item.title}</p>
        <p>{`${item.qtd} x`}</p>
        <p>{`R$ ${item.price}`}</p>
      </div>
    );
  }

  renderProducts() {
    const { products } = this.state;
    return (
      <div className="container-products">
        <p>Revise seus Produtos</p>
        { products.map((item) => this.renderProduct(item)) }
        { `Total: R$ ${this.sumTotalItems()}`}
      </div>
    );
  }

  renderForm() {
    return (
      <div className="div-form">
        <p>Informações do Comprador</p>
        <form className="container-form">
          <input
            type="text"
            placeholder="Nome Completo"
            data-testid="checkout-fullname"
          />
          <input
            type="email"
            placeholder="Email"
            data-testid="checkout-email"
          />
          <input
            type="text"
            placeholder="CPF"
            data-testid="checkout-cpf"
          />
          <input
            type="text"
            placeholder="Telefone"
            data-testid="checkout-phone"
          />
          <input
            type="text"
            placeholder="CEP"
            data-testid="checkout-cep"
          />
          <input
            type="text"
            placeholder="Endereço"
            data-testid="checkout-address"
          />
        </form>
      </div>
    );
  }

  renderPay() {
    return (
      <div className="container-pay">
        <p>Método de Pagamento</p>
      </div>
    );
  }

  render() {
    return (
      <div>
        <Link
          className="link-back"
          to="/cart"
        >
          <img src="back.png" width="40px" alt="icon-back" />
        </Link>
        { this.renderProducts() }
        { this.renderForm() }
        { this.renderPay() }
        <button className="btn-buy" type="submit">Comprar</button>
      </div>
    );
  }
}

export default FinishBuy;
