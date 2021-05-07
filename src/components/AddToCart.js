import React from 'react';
import PropTypes from 'prop-types';

import { saveToCart } from '../services/cart';

class AddToCart extends React.Component {
  render() {
    const { productInfos: { id, title, amount, testId, quantity } } = this.props;
    return (
      <button
        type="button"
        data-testid={ testId }
        onClick={ () => saveToCart(id, title, amount, quantity) }
      >
        Adicionar ao Carrinho
      </button>
    );
  }
}

AddToCart.propTypes = {
  productInfos: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    testId: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
};

export default AddToCart;
