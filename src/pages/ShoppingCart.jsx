import React from 'react';
import PropTypes from 'prop-types';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.renderShoppingCart = this.renderShoppingCart.bind(this);
    this.productIncrease = this.productIncrease.bind(this);
    this.productDecrease = this.productDecrease.bind(this);
    this.state = {
      shoppingCart: props.shoppingCart,
    };
  }

  productIncrease(product) {
    const { shoppingCart } = this.state;
    const newCart = shoppingCart.map((obj) => {
      if (obj.id === product.id) {
        obj.quantity += 1;
      }
      return obj;
    });
    this.setState({ shoppingCart: newCart });
  }

  productDecrease(product) {
    const { shoppingCart } = this.state;
    const newCart = shoppingCart.map((obj) => {
      if (obj.id === product.id) {
        obj.quantity -= 1;
      }
      return obj;
    });
    this.setState({ shoppingCart: newCart });
  }

  renderShoppingCart() {
    const { shoppingCart } = this.state;
    if (shoppingCart.length === 0) {
      return (
        <span data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </span>
      );
    }

    return shoppingCart.map((product) => (
      <div key={ Math.random() }>
        <button type="button">x</button>
        <span data-testid="shopping-cart-product-name">{ product.title }</span>
        <button
          type="button"
          data-testid="product-decrease-quantity"
          onClick={ () => this.productDecrease(product) }
        >
          -
        </button>
        <span data-testid="shopping-cart-product-quantity">{ product.quantity }</span>
        <button
          type="button"
          data-testid="product-increase-quantity"
          onClick={ () => this.productIncrease(product) }
        >
          +
        </button>
      </div>
    ));
  }

  render() {
    return (
      <div>
        { this.renderShoppingCart() }
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  title: PropTypes.string,
  price: PropTypes.string,
}.isRequired;

export default ShoppingCart;
