import React from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import CartItem from '../components/CartItem';
import FormsCheckout from '../components/FormsCheckout';

export default class Checkout extends React.Component {
  constructor(props) {
    super(props);

    const { cartHandler } = this.props;
    console.log(cartHandler);

    this.state = {
      status: cartHandler,
      changePage: false,
    };

    this.changePage = this.changePage.bind(this);
  }

  changePage() {
    console.log('Compra Finalizada!');
    this.setState({
      changePage: true,
    });
  }

  render() {
    const { status, changePage } = this.state;
    const { items, total, remove, changeQuantityOf } = status;
    const formattedTotal = total().toFixed(2).replace('.', ',');

    if (changePage) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <div>
          <Link to="/">Voltar</Link>
        </div>
        <div>
          <section>
            <div>
              <h2>Revise seus Produtos</h2>
              { items.map((item, index) => (
                <CartItem
                  key={ item.id }
                  index={ index }
                  item={ item }
                  changeQuantity={ changeQuantityOf }
                  removeItem={ remove }
                />))}
              <strong>Valor Total da Compra:</strong>
              { ` R$ ${formattedTotal}` }
            </div>
          </section>
          <section>
            <div>
              <h2>Informações do Comprador</h2>
              <FormsCheckout />
            </div>
          </section>
        </div>
        <div>
          <button type="button" onClick={ this.changePage }>Comprar</button>
        </div>
      </div>
    );
  }
}

Checkout.propTypes = {
  cartHandler: PropTypes.shape({
    add: PropTypes.func.isRequired,
    changeQuantityOf: PropTypes.func.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.objectOf(
        PropTypes.shape({
          availableQuantity: PropTypes.number,
          freeShipping: PropTypes.bool,
          id: PropTypes.string,
          price: PropTypes.number,
          quantity: PropTypes.number,
          thumbnail: PropTypes.string,
          title: PropTypes.string,
        }),
      ),
    ),
    remove: PropTypes.func.isRequired,
    size: PropTypes.func.isRequired,
    total: PropTypes.func.isRequired,
  }).isRequired,
};
