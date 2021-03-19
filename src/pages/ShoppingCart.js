import React from 'react';

import Header from '../components/Header';
import ArrowBack from '../components/ArrowBack';
import ShoppingIcon from '../components/ShoppingIcon';
import ProductsInCart from '../components/ProductsInCart';
import cart from '../services/cart';

class ShoppingCart extends React.Component {
  isCartEmpty() {
    const products = cart.getProdutsInStorage();
    if (products.length === 0) {
      return true;
    }
    return false;
  }

  render() {
    const showInput = false;
    const showSearchButton = false;
    const emptyCart = this.isCartEmpty();
    const emptyCartScreen = (
      <div>
        <ShoppingIcon />
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      </div>
    );
    return (
      <>
        <ArrowBack />
        <Header
          showInput={ showInput }
          showSearchButton={ showSearchButton }
        />
        <main className="main">
          {emptyCart ? emptyCartScreen : <ProductsInCart />}
        </main>
      </>
    );
  }
}

export default ShoppingCart;
