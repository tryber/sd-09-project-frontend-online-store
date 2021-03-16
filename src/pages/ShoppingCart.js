import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ShoppingCart extends Component {
  constructor(props) {
    super(props);
    this.changeQuantity = this.changeQuantity.bind(this);
    this.updateState = this.updateState.bind(this);
    this.state = {};
  }

  componentDidMount() {
    const { location } = this.props;
    const newList = location.state.cartList.map((cartItem) => {
      cartItem.quantity = 1;
      return {
        ...cartItem,
      };
    });
    this.updateState(newList);
  }

  updateState(content) {
    this.setState(
      {
        items: content,
      },
    );
  }

  changeQuantity(item, operation) {
    if (item.quantity > 0 && operation === 'sub') {
      item.quantity -= 1;
    }
    if (operation === 'sum') {
      item.quantity += 1;
    }
    this.setState((prev) => (
      {
        ...prev,
        item,
      }
    ));
  }

  render() {
    const { items } = this.state;
    return items !== undefined && items.length !== 0 ? (
      items.map((item) => (
        <div key={ item.id }>
          <div>
            <p data-testid="shopping-cart-product-name">{ item.title }</p>
            <img src={ item.thumbnail } alt="product" />
            <p>{ item.price }</p>
            <button
              type="button"
              data-testid="product-increase-quantity"
              onClick={ () => this.changeQuantity(item, 'sum') }
            >
              +
            </button>
            <p data-testid="shopping-cart-product-quantity">{ item.quantity }</p>
            <button
              type="button"
              data-testid="product-decrease-quantity"
              onClick={ () => this.changeQuantity(item, 'sub') }
            >
              -
            </button>
          </div>
        </div>
      ))
    ) : (
      <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
    );
  }
}

ShoppingCart.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      cartList: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string,
          title: PropTypes.string,
          image: PropTypes.string,
          price: PropTypes.number,
        }),
      ),
    }),
  }),
}.isRequired;

export default ShoppingCart;
