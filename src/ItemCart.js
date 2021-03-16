import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ItemCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
    };

    this.quantitySum = this.quantitySum.bind(this);
    this.quantitySub = this.quantitySub.bind(this);
    this.quantityMin = this.quantityMin.bind(this);
    this.quantityMax = this.quantityMax.bind(this);
  }

  quantitySum() {
    this.setState((state) => ({
      quantity: state.quantity + 1,
    }));
  }

  quantitySub() {
    this.setState((state) => ({
      quantity: state.quantity - 1,
    }));
  }

  quantityMin() {
    let min = false;
    const { quantity } = this.state;
    if (quantity <= 1) {
      min = true;
    }
    return min;
  }

  quantityMax() {
    let max = false;
    const { quantity } = this.state;
    const { item } = this.props;
    if (quantity >= item.available_quantify) {
      max = true;
    }
    return max;
  }

  render() {
    const { item: { title, thumbnail, price } } = this.props;
    const { quantity } = this.state;
    return (
      <div data-testid="product">
        <h1 data-testid="shopping-cart-product-name">{title}</h1>
        <img src={ thumbnail } alt={ title } />
        <p>{price}</p>
        <button
          type="button"
          onClick={ () => this.quantitySum() }
          data-testid="product-increase-quantity"
          disabled={ this.quantityMax() }
        >
          +
        </button>
        <p data-testid="shopping-cart-product-quantity">
          {quantity}
        </p>
        <button
          type="button"
          onClick={ () => this.quantitySub() }
          data-testid="product-decrease-quantity"
          disabled={ this.quantityMin() }
        >
          -
        </button>
      </div>
    );
  }
}

ItemCart.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }),
}.isRequired;

export default ItemCart;
