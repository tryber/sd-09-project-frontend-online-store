import React from 'react';
import PropTypes from 'prop-types';

class CartCardProduct extends React.Component {
  constructor() {
    super();
    this.state = {
      amount: 1,
    };
    this.changesAmountOfProductsAtCart = this.changesAmountOfProductsAtCart.bind(this);
  }

  changesAmountOfProductsAtCart(numberOne, amount) {
    if (amount === 0) {
      this.setState({ amount: 0 });
    } else {
      this.setState((estadoAnterior) => ({
        amount: estadoAnterior.amount + numberOne,
      }));
    }
  }

  render() {
    const { amount } = this.state;
    const { product: { title, thumbnail, price } } = this.props;
    const numberOne = 1;
    return (
      <div>
        <button type="button">X</button>
        <h2 data-testid="shopping-cart-product-name">{ title }</h2>
        <img src={ thumbnail } alt="Imagen do produto" />
        <p>
          R$
          { price * amount }
        </p>
        <button
          type="button"
          data-testid="product-increase-quantity"
          onClick={ () => this.changesAmountOfProductsAtCart(+numberOne) }
        >
          +
        </button>
        <spam
          data-testid="shopping-cart-product-quantity"
        >
          {amount}
        </spam>
        <button
          type="button"
          data-testid="product-decrease-quantity "
          onClick={ () => this.changesAmountOfProductsAtCart(-numberOne, amount) }
        >
          -
        </button>
      </div>
    );
  }
}

CartCardProduct.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default CartCardProduct;
