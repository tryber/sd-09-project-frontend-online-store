import React from 'react';
import PropTypes from 'prop-types';
import CartCardProduct from '../components/CartCardProduct';

class ShoppingCart extends React.Component {
  render() {
    const { location: { state: { cartProductsId } } } = this.props;
    return (
      <div>
        {cartProductsId.length === 0
          ? <span data-testid="shopping-cart-empty-message">Seu carrinho está vazio</span>
          : cartProductsId.map((product) => (
            <CartCardProduct key={ product.id } product={ product } />
          ))}
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      cartProductsId: PropTypes.objectOf(),
    }),
  }).isRequired,
};

export default ShoppingCart;
