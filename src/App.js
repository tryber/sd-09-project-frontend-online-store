import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Carrinho from './components/Carrinho';
import Detalhes from './components/Detalhes';
import Checkout from './components/Checkout';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [],
      cartItemsQuantity: Number(localStorage.cartItemsQuantity) || 0,
    };

    this.addToCart = this.addToCart.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.updateTotalItems = this.updateTotalItems.bind(this);
  }

  addToCart(product) {
    const { cartItems } = this.state;
    // event.target.disabled = true;
    if (cartItems.length > 0) {
      return cartItems.every(({ id }) => id !== product.id)
        && this.setState({ cartItems: [...cartItems, product] });
    }
    this.setState({ cartItems: [...cartItems, product] });
  }

  updateTotalItems(num) {
    this.setState(({ cartItemsQuantity }) => ({
      cartItemsQuantity: cartItemsQuantity + Number(num),
    }), () => {
      const { cartItemsQuantity } = this.state;
      localStorage.setItem('cartItemsQuantity', Number(cartItemsQuantity));
    });
  }

  removeItem(itemTitle) {
    const { cartItems } = this.state;
    const item = cartItems.find(({ title }) => title === itemTitle);
    cartItems.splice(cartItems.indexOf(item), 1);
    this.setState({ cartItems });
  }

  render() {
    const { cartItems, cartItemsQuantity } = this.state;
    return (
      <main>
        <BrowserRouter>
          <Switch>
            <Route
              path="/carrinho"
              render={ () => (
                <Carrinho
                  products={ cartItems }
                  removeProduct={ this.removeItem }
                  handleCartItemsQuantity={ this.updateTotalItems }
                />) }
            />
            <Route
              path="/checkout"
              render={ () => <Checkout products={ cartItems } /> }
            />
            <Route
              path="/:id/detalhes"
              render={ (props) => (
                <Detalhes
                  { ...props }
                  addToCart={ this.addToCart }
                  handleCartItemsQuantity={ this.updateTotalItems }
                  cartItemsQuantity={ cartItemsQuantity }
                />) }
            />
            <Route
              exact
              path="/"
              render={ () => (
                <Home
                  cartItemsQuantity={ cartItemsQuantity }
                  addToCart={ this.addToCart }
                  handleCartItemsQuantity={ this.updateTotalItems }
                />) }
            />
          </Switch>
        </BrowserRouter>
      </main>
    );
  }
}

export default App;
