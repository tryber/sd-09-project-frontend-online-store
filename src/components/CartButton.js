import React from 'react';
import PropTypes from 'prop-types';
import CartList from './CartList';

class CartButton extends React.Component {
  constructor(props) {
    super(props);
    this.loadCartList = this.loadCartList.bind(this);
  }

  loadCartList() {
    let previousList = localStorage.getItem('cartList');
    if (previousList === null) {
      previousList = [];
      return previousList;
    }
    return JSON.parse(previousList);
  }

  render() {
    const details = this.loadCartList();
    return (
      <div>
        {details.length === 0
          ? <span data-testid="shopping-cart-empty-message">Seu carrinho está vazio</span>
          : details
            .map((product) => <CartList key={ product.id } product={ product } />)}
      </div>
    );
  }
}

CartButton.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      details: PropTypes.shape({
        title: PropTypes.string,
        price: PropTypes.number,
        thumbnail: PropTypes.string,
        sold_quantity: PropTypes.number,
        length: PropTypes.func,
        map: PropTypes.func,
      }),
    }),
  }).isRequired,
};

export default CartButton;
