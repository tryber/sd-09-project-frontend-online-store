import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/pages/ShoppingCart.css';
import CartItem from '../components/CartItem';

class ShoppingCart extends Component {
  constructor() {
    super();
    this.state = {
      totalPayable: 0,
    };
    this.sumPrices = this.sumPrices.bind(this);
    this.increaseQuantity = this.increaseQuantity.bind(this);
    this.decreaseQuantity = this.decreaseQuantity.bind(this);
  }

  componentDidMount() {
    this.sumPrices();
  }

  componentDidUpdate(_, prevState) {
    const { totalPayable } = this.state;
    if ((totalPayable === prevState.totalPayable)) {
      this.sumPrices();
    }
  }

  sumPrices() {
    const { cartItems } = this.props;
    if (cartItems.length !== 0) {
      const totalPayable = cartItems
        .reduce(((result, item) => {
          result += (item.price * item.amount);
          return result;
        }), 0);
      this.setState({
        totalPayable,
      });
    }
  }

  increaseQuantity(productId) {
    const { cartItems, updateCartItemsLength } = this.props;
    cartItems.forEach((item) => {
      if (item.id === productId) {
        item.amount += 1;
      }
    });
    updateCartItemsLength(cartItems);
    this.sumPrices();
  }

  decreaseQuantity(productId) {
    const { cartItems, updateCartItemsLength } = this.props;
    cartItems.forEach((item) => {
      if ((item.id === productId) && (item.amount > 1)) {
        item.amount -= 1;
        updateCartItemsLength(cartItems);
        this.sumPrices();
      }
    });
  }

  render() {
    const { emptyCart, cartItems, removeItemFromCart } = this.props;
    const { totalPayable } = this.state;
    return (
      <>
        <div className="cart-header-container">
          <Link to="/">
            <button type="button" alt="return-button" />
          </Link>
        </div>
        { !(emptyCart) ? (
          <div className="shopping-cart-list">
            <h2>Carrinho de Compras</h2>
            { cartItems
              .map((item) => (<CartItem
                key={ item.id }
                item={ item }
                increaseQuantity={ this.increaseQuantity }
                decreaseQuantity={ this.decreaseQuantity }
                removeItemFromCart={ removeItemFromCart }
              />)) }
            <h4>
              Valor Total da Compra: R$
              { totalPayable.toFixed(2) }
            </h4>
            <Link to={ { pathname: '/checkout', state: { totalPayable } } }>
              <button
                data-testid="checkout-products"
                className="checkout-button"
                type="button"
              >
                Finalizar Compra
              </button>
            </Link>
          </div>
        ) : (
          <div
            className="empty-message-container"
            data-testid="shopping-cart-empty-message"
          >
            <img src="/images/icons8-empty-box-100.png" alt="Empty Box" />
            <span>Seu carrinho está vazio</span>
          </div>
        ) }
      </>
    );
  }
}

ShoppingCart.propTypes = {
  emptyCart: PropTypes.bool.isRequired,
  cartItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeItemFromCart: PropTypes.func.isRequired,
  updateCartItemsLength: PropTypes.func.isRequired,
};

export default ShoppingCart;
