import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ItemCart extends Component {
  constructor(props) {
    super(props);
    this.ChangeQuantity = this.ChangeQuantity.bind(this);
  }

  ChangeQuantity(onClick, operation, item) {
    onClick(item, operation);
  }

  render() {
    const { item, onClick } = this.props;
    return (
      <div data-testid="product">
        <h1 data-testid="shopping-cart-product-name">{item.title}</h1>
        <p>{item.price}</p>
        <button
          type="button"
          onClick={ () => this.ChangeQuantity(onClick, 'add', item) }
          data-testid="product-increase-quantity"
        >
          +
        </button>
        <p data-testid="shopping-cart-product-quantity">
          {item.purchaseQuantity}
        </p>
        <button
          type="button"
          onClick={ () => this.ChangeQuantity(onClick, 'sub', item) }
          data-testid="product-decrease-quantity"
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
