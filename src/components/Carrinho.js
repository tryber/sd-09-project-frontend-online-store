import React from 'react';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ItemsCart from './ItemsCart';

class Carrinho extends React.Component {
  render() {
    const { products, removeProduct, handleCartItemsQuantity } = this.props;
    if (products.length > 0) {
      return (
        <section>
          { products.map((item) => (
            <ItemsCart
              key={ item.id }
              productInfo={ item }
              removeProduct={ removeProduct }
              handleCartItemsQuantity={ handleCartItemsQuantity }
            />
          ))}
          {/* <h3>
            {`Total: R$ ${products.reduce((total, item) => total + (item.price), 0)}`}
          </h3> */}
          <Link to="/checkout" data-testid="checkout-products"> Finalizar Compra </Link>
        </section>
      );
    }
    return (
      <section>
        <span data-testid="shopping-cart-empty-message">Seu carrinho está vazio</span>
      </section>
    );
  }
}

Carrinho.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
  removeProduct: PropTypes.func.isRequired,
  handleCartItemsQuantity: PropTypes.func.isRequired,
};

Carrinho.defaultProps = {
  products: [],
};

export default Carrinho;
