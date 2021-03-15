import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CardShoppingCartList from '../Components/CardShoppingCartList';

class Carrinho extends React.Component {
  render() {
    const { totalCart } = this.props;
    return (
      <div>
        <CardShoppingCartList totalShoppingCart={ totalCart } />
        <Link data-testid="checkout-products" to="/checkout">
          Checkout
        </Link>
      </div>
    );
  }
}

Carrinho.propTypes = {
  totalCart: PropTypes.arrayOf().isRequired,
};

export default Carrinho;
