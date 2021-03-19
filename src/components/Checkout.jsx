import React from 'react';
import PropTypes from 'prop-types';
// import ItemsCart from './ItemsCart';

class Checkout extends React.Component {
  constructor() {
    super();
    this.state = {
      fullname: '',
      email: '',
      cpf: '',
      phone: '',
      cep: '',
      address: '',
    };
    this.userInfoState = this.userInfoState.bind(this);
  }

  userInfoState(id, event) {
    const { value } = event.target;
    this.setState({ [id]: value });
  }

  productsInfo() {
    const { products } = this.props;
    return (
      <fieldset>
        <h3>Revise seus produtos</h3>
        { products.map(({ id, thumbnail, title, price, freeShipping,
        }) => (
          <div key={ id }>
            <h4 data-testid="shopping-cart-product-name">{ title }</h4>
            <img src={ thumbnail } alt={ title } />
            <span>{`R$ ${price}`}</span>
            { freeShipping && <h4 data-testid="free-shipping">Frete grátis</h4>}
          </div>
        ))}
        {/* <div>
          Preço Total:
          {` R$ ${products.reduce((total, item) => total + (item.price), 0)}`}
        </div> */}
      </fieldset>
    );
  }

  userInfo(id, placeholder) {
    return (
      <label htmlFor={ `${id}` }>
        <input
          type="text"
          data-testid={ `checkout-${id}` }
          placeholder={ `${placeholder}` }
          onChange={ (event) => this.userInfoState(id, event) }
        />
      </label>
    );
  }

  render() {
    const { fullname, email, cpf, phone, cep, address } = this.state;
    console.log(fullname, email, cpf, phone, cep, address);
    return (
      <section>
        <form>
          { this.productsInfo() }
          <fieldset>
            <h3>Informações do comprador</h3>
            { this.userInfo('fullname', 'Nome Completo') }
            { this.userInfo('email', 'Email') }
            { this.userInfo('cpf', 'CPF') }
            { this.userInfo('phone', 'Telefone') }
            { this.userInfo('cep', 'CEP') }
            { this.userInfo('address', 'Endereço') }
            <button type="button">Comprar</button>
          </fieldset>
        </form>
      </section>
    );
  }
}

export default Checkout;

Checkout.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
};

Checkout.defaultProps = {
  products: [],
};
