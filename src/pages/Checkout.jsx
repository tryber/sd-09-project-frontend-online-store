import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { captureProduct } from '../services/functions';
import Home from './Home';
import ProductCheckout from '../components/ProductCheckout';
import './Checkout.css';

class Checkout extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      totalPriceProducts: 0,
    };

    this.userInputsForm = this.userInputsForm.bind(this);
    this.paymentsForm = this.paymentsForm.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.finishedPurchase = this.finishedPurchase.bind(this);
  }

  componentDidMount() {
    this.changeState();
  }

  handleInputChange(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  }

  finishedPurchase() {
    const { fullname, email, cpf, phone, cep, address, payment } = this.state;

    if (fullname && email && cpf && phone && cep && address && payment) {
      // eslint-disable-line no-alert
      console.log('Todos os campos preenchidos');
    }
  }

  changeState() {
    const [products, totalPriceProducts] = captureProduct();
    this.setState({
      products,
      totalPriceProducts,
    });
  }

  initialInputForm() {
    return [
      {
        text: 'Nome completo',
        type: 'text',
        testid: 'checkout-fullname',
        label: 'fullname',
        title: 'O Nome deve ter no mínimo 5 caracteres.',
      },
      {
        text: 'Email',
        type: 'email',
        testid: 'checkout-email',
        label: 'email',
        title: 'Exemplo de e-mail: teste@teste.com',
      },
      {
        text: 'CPF',
        type: 'text',
        testid: 'checkout-cpf',
        label: 'cpf',
        title: 'Exemplo de CPF: 999.999.999-99',
      },
      {
        text: 'Telefone',
        type: 'text',
        testid: 'checkout-phone',
        label: 'phone',
        title: 'Exemplo de Telefone: (99) 99999-9999',
      },
      {
        text: 'CEP',
        type: 'text',
        testid: 'checkout-cep',
        label: 'cep',
        title: 'Exemplo de CEP: 99999-999',
      },
      {
        text: 'Endereço',
        type: 'text',
        testid: 'checkout-address',
        label: 'address',
        title: 'O Endereço deve ter no mínimo 5 caracteres.',
      },
    ];
  }

  userInputsForm() {
    const array = this.initialInputForm();

    return (
      array.map(({ text, type, testid, label, title }, index) => (
        <label key={ `input${index}` } htmlFor={ label }>
          <span>{text}</span>
          <input
            type={ type }
            id={ label }
            name={ label }
            className="inputForm"
            onChange={ this.handleInputChange }
            data-testid={ testid }
            title={ title }
            required
          />
        </label>
      ))
    );
  }

  paymentsForm() {
    const array = ['Boleto', 'Visa', 'MasterCard', 'Elo'];

    return (
      array.map((pay, index) => (
        <label key={ `payment${index}` } htmlFor={ `checkout-${pay.toLowerCase()}` }>
          <input
            type="radio"
            id={ `checkout-${pay.toLowerCase()}` }
            name="payment"
            value={ pay.toLowerCase() }
            onClick={ this.handleInputChange }
            required
          />
          {pay}
        </label>
      )));
  }

  renderCheckout() {
    const { products, totalPriceProducts } = this.state;

    return (
      <>
        <header className="checkout-header">
          <Link to="/cart" data-testid="back-home-button">
            <i className="far fa-arrow-alt-circle-left" />
          </Link>
        </header>
        <main>
          <section className="checkout-content">
            <h1>Resumo da Compra</h1>
            {products.map((eachProduct) => (
              <ProductCheckout key={ eachProduct.id } eachProduct={ eachProduct } />
            ))}
            <p>{totalPriceProducts}</p>
          </section>
          <form>
            <section className="checkout-content">
              <h1>Informações Comprador</h1>
              {this.userInputsForm()}
            </section>
            <section className="checkout-content">
              <h1>Métodos de Pagamento</h1>
              { this.paymentsForm().map((star) => star) }
            </section>
            <input type="submit" onClick={ this.finishedPurchase } />
          </form>
        </main>
        <br />
        <br />
        <br />
      </>
    );
  }

  render() {
    const {
      location: { state },
    } = this.props;

    return (
      <div>
        {!state ? (
          <Redirect to="/" component={ Home } />
        ) : (
          this.renderCheckout(state)
        )}
      </div>
    );
  }
}

Checkout.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      access: PropTypes.bool,
    }),
  }).isRequired,
};

export default Checkout;
