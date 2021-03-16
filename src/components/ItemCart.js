import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ItemCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
    };
    this.decreaseQtt = this.decreaseQtt.bind(this);
    this.increaseQtt = this.increaseQtt.bind(this);
  }

  decreaseQtt() {
    const { sumToCart } = this.props;
    const magicNumber = -1;
    this.setState((previousState) => ({
      quantity: previousState.quantity - 1,
    }));
    sumToCart(magicNumber);
  }

  increaseQtt() {
    const { sumToCart } = this.props;
    this.setState((previousState) => ({
      quantity: previousState.quantity + 1,
    }));
    sumToCart(1);
  }

  render() {
    const { quantity } = this.state;
    const { item } = this.props;
    let min = false;
    let plus = false;
    if (quantity <= 0) min = true;
    if (quantity >= item.available_quantity) plus = true;
    const { title, price, thumbnail } = item;
    return (
      <div data-testid="product">
        <h4 data-testid="shopping-cart-product-name">{ title }</h4>
        <p>{ price }</p>
        <img src={ thumbnail } alt={ title } />
        <br />
        <button
          type="button"
          onClick={ this.decreaseQtt }
          data-testid="product-decrease-quantity"
          disabled={ min }
        >
          -
        </button>
        <p data-testid="shopping-cart-product-quantity">
          { quantity }
        </p>
        <button
          type="button"
          onClick={ this.increaseQtt }
          data-testid="product-increase-quantity"
          disabled={ plus }
        >
          +
        </button>
      </div>
    );
  }
}

ItemCart.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
  }),
  sumToCart: PropTypes.func,
}.isRequired;

export default ItemCart;
