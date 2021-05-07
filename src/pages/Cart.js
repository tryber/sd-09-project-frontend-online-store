import React from 'react';
import { Link } from 'react-router-dom';
import { recoverCart } from '../services/cart';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: recoverCart(),
    };
    this.cartItemIncrease = this.cartItemIncrease.bind(this);
    this.cartItemDecrease = this.cartItemDecrease.bind(this);
  }

  cartItemIncrease(id) {
    const currentCart = JSON.parse(localStorage.getItem('cart'));
    const updatedCart = currentCart.map((product) => {
      if (product.id === id && product.quantity > product.amount) {
        return { ...product, amount: product.amount + 1 };
      }
      console.log(product);
      return product;
    });
    localStorage.cart = JSON.stringify(updatedCart);
    this.setState({
      cartItems: updatedCart,
    });
  }

  cartItemDecrease(id) {
    const currentCart = JSON.parse(localStorage.getItem('cart'));
    const updatedCart = currentCart.map((product) => {
      if (product.id === id) return { ...product, amount: product.amount - 1 };
      return product;
    });
    localStorage.cart = JSON.stringify(updatedCart);
    this.setState({
      cartItems: updatedCart,
    });
  }

  render() {
    const { cartItems } = this.state;
    return (
      <div>
        {cartItems
          ? (cartItems.map(({ id, name, amount }) => (
            <div className="cartItem" key={ id }>
              <p data-testid="shopping-cart-product-name">{ name }</p>
              <p data-testid="shopping-cart-product-quantity">{ amount }</p>
              <button
                type="button"
                data-testid="product-increase-quantity"
                onClick={ () => this.cartItemIncrease(id) }
              >
                +
              </button>
              <button
                type="button"
                data-testid="product-decrease-quantity"
                onClick={ () => this.cartItemDecrease(id) }
              >
                -
              </button>
              <Link to="/pages/checkout" data-testid="checkout-products">
                Finalizar compra
              </Link>
            </div>
          )))
          : (
            <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>
          )}
      </div>
    );
  }
}

export default Cart;
