import React from 'react';
import PropTypes from 'prop-types';

class OrderSummary extends React.Component {
  constructor(props) {
    super(props);
    const { location } = this.props;
    const { state } = location;
    this.state = {
      order: [...state],
      totalPrice: 0,
      submit: false,
    };
    this.productsReview = this.productsReview.bind(this);
    this.buyerInfos = this.buyerInfos.bind(this);
    this.totalPrice = this.totalPrice.bind(this);
    this.paymentMethod = this.paymentMethod.bind(this);
    this.submitPurchase = this.submitPurchase.bind(this);
  }

  componentDidMount() {
    this.totalPrice();
  }

  submitPurchase() {
    if (localStorage.getItem('shoppingCart')) {
      localStorage.clear();
      this.setState({
        submit: true,
      });
    }
  }

  productsReview() {
    const { order, totalPrice } = this.state;
    return (
      <div>
        <h1>Revise seus Produtos</h1>
        {
          order.map(({ title, thumbnail, quantity, id, price }) => (
            <div key={ id }>
              <img src={ thumbnail } alt={ `foto ${title}` } />
              <span>{ title }</span>
              <span>
                R$
                { price * quantity }
              </span>
            </div>
          ))
        }
        <p>
          Preço Total: R$
          { totalPrice }
        </p>
      </div>
    );
  }

  totalPrice() {
    const { order } = this.state;
    const total = order
      .reduce((acc, product) => acc + (product.price * product.quantity), 0);
    this.setState({
      totalPrice: total,
    });
  }

  buyerInfos() {
    return (
      <div>
        <input
          type="text"
          name="name"
          data-testid="checkout-fullname"
          placeholder="Nome completo"
          required
        />
        <input
          type="text"
          name="CPF"
          data-testid="checkout-cpf"
          placeholder="CPF"
          required
        />
        <input
          type="email"
          name="email"
          data-testid="checkout-email"
          placeholder="E-mail"
          required
        />
        <input
          type="text"
          name="telefone"
          data-testid="checkout-phone"
          placeholder="Telefone"
          required
        />
        <input
          type="text"
          name="CEP"
          data-testid="checkout-cep"
          placeholder="CEP"
          required
        />
        <input
          type="text"
          name="address"
          data-testid="checkout-address"
          placeholder="Endereço"
          required
        />
      </div>
    );
  }

  paymentMethod() {
    return (
      <div>
        <label htmlFor="boleto">
          Boleto
          <input
            id="boleto"
            type="radio"
            name="payment"
          />
        </label>
        <label htmlFor="creditcard">
          Cartão de crédito
          <input
            id="creditcard"
            type="radio"
            name="payment"
            value="visa"
          />
          Visa
          <input
            id="creditcard"
            type="radio"
            name="payment"
            value="mastercard"
          />
          MasterCard
          <input
            id="creditcard"
            type="radio"
            name="payment"
            value="elo"
          />
          Elo
        </label>
      </div>
    );
  }

  renderForm() {
    return (
      <form>
        { this.buyerInfos() }
        { this.paymentMethod() }
        <button
          type="button"
          onClick={ this.submitPurchase }
        >
          Finalizar a Compra!
        </button>
      </form>
    );
  }

  render() {
    const { submit } = this.state;
    const submitted = <h1>Obrigado por comprar conosco!</h1>;
    return (
      <div>
        { !submit && this.productsReview() }
        { !submit && this.renderForm() }
        { submit && submitted }
      </div>
    );
  }
}

OrderSummary.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.arrayOf(),
  }).isRequired,
};

export default OrderSummary;
