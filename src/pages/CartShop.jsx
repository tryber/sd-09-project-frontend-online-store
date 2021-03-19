import React from 'react';
import PropTypes from 'prop-types';
import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';
import CheckoutButton from '../components/CheckoutButton';

require('./CartShop.css');

export default class CartShop extends React.Component {
  render() {
    // const { items, total } = this.state;
    const { cartHandler: { items, total, remove, changeQuantityOf } } = this.props;
    const cartIsEmpty = items.length === 0;
    const formattedTotal = total().toFixed(2).replace('.', ',');

    return (
      <main>
        <h1>
          <FiShoppingCart />
          Carrinho de compras
        </h1>
        <div className="CartShop__List">
          { cartIsEmpty
            ? <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
            : (
              <div>
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
            )}
        </div>
        <Link to="/">Continuar comprando</Link>
        <CheckoutButton />
      </main>
    );
  }
}

CartShop.propTypes = {
  cartHandler: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.object,
    ).isRequired,
    total: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
    changeQuantityOf: PropTypes.func.isRequired,
  }).isRequired,
};
