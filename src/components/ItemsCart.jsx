import React, { Component } from 'react';

import PropTypes from 'prop-types';

class ItemsCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
      itemTotalPrice: props.productInfo.price,
    };
    this.increaseQuantity = this.increaseQuantity.bind(this);
    this.decreaseQuantity = this.decreaseQuantity.bind(this);
  }

  increaseQuantity(price) {
    this.setState(({ quantity, itemTotalPrice }) => ({
      quantity: quantity + 1,
      itemTotalPrice: itemTotalPrice + price,
    }));
  }

  decreaseQuantity(price) {
    const { productInfo: { title }, removeProduct } = this.props;
    const { quantity } = this.state;
    if (quantity === 1) {
      return removeProduct(title);
    }
    this.setState(({ itemTotalPrice }) => ({
      quantity: quantity - 1,
      itemTotalPrice: itemTotalPrice - price,
    }));
  }

  render() {
    const {
      productInfo: {
        title, thumbnail, price }, removeProduct, handleCartItemsQuantity } = this.props;
    const { quantity } = this.state;
    return (
      <div data-testid="product">
        <h4 data-testid="shopping-cart-product-name">{ title }</h4>
        <button
          type="button"
          onClick={ () => removeProduct(title) }
        >
          X
        </button>
        <div>
          <img src={ thumbnail } alt={ title } />
        </div>
        <p>{`R$ ${price * quantity}`}</p>
        <button
          data-testid="product-increase-quantity"
          type="button"
          onClick={ () => {
            this.increaseQuantity(price);
            handleCartItemsQuantity(1);
          } }
        >
          +
        </button>
        <span data-testid="shopping-cart-product-quantity">{ quantity }</span>
        <button
          data-testid="product-decrease-quantity"
          type="button"
          onClick={ () => {
            const magicNumber = -1;
            this.decreaseQuantity(price);
            handleCartItemsQuantity(magicNumber);
          } }
        >
          -
        </button>
      </div>
    );
  }
}

ItemsCart.propTypes = {
  productInfo: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }),
  removeProduct: PropTypes.func.isRequired,
  handleCartItemsQuantity: PropTypes.func.isRequired,
};

ItemsCart.defaultProps = {
  productInfo: {},
};

export default ItemsCart;
