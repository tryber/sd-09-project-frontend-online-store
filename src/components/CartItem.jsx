import React from 'react';
import PropTypes from 'prop-types';

class CartItem extends React.Component {
  constructor() {
    super();
    this.state = { multiply: 1 };
    this.updatePrice = this.updatePrice.bind(this);
  }

  updatePrice(quant) {
    const { multiply } = this.state;

    /* [BUG] - quando decrementamos o item até 0,
         que clicamos novamente ele incrementa e volta a 0 novamente
       [SOLUÇÂO] - sugerir 'remover item do carrinho' ao chegar em 0; */
    if (multiply <= 0) {
      this.setState({ multiply: 1 });
    } else this.setState((beforeState) => ({ multiply: beforeState.multiply + quant }));
  }

  render() {
    const { item: { title, price } } = this.props;
    const { multiply } = this.state;
    const quantity = 0;
    const amount = 1;

    return (
      <li>
        <span data-testid="shopping-cart-product-name">{title}</span>
        <input
          type="button"
          value="-"
          data-testid="product-decrease-quantity"
          onClick={ () => this.updatePrice(quantity - 1) }
        />
        <span data-testid="shopping-cart-product-quantity">{amount * multiply}</span>
        <input
          type="button"
          value="+"
          data-testid="product-increase-quantity"
          onClick={ () => this.updatePrice(quantity + 1) }
        />
        <span>
          R$:
          {price * multiply}
        </span>
      </li>
    );
  }
}

CartItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
  }),
};

CartItem.defaultProps = {
  item: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
  }),
};

export default CartItem;
