import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from './components/MainPage';
import ShoppingCart from './components/ShoppingCart';
import ItemDetails from './components/ItemDetails';
import CheckoutCart from './components/CheckoutCart';

class App extends Component {
  constructor(props) {
    super(props);
    const initialCart = JSON.parse(localStorage.getItem('cartItem')) || [];
    const initialQtt = +(localStorage.getItem('itemsQtt'));
    this.state = {
      cartItems: initialCart,
      itemsQtt: initialQtt,
    };
    this.handleCart = this.handleCart.bind(this);
    this.sumToCart = this.sumToCart.bind(this);
    // this.setLocalStorageCart = this.setLocalStorageCart.bind(this);
  }

  handleCart(item) {
    const { cartItems } = this.state;
    this.setState({
      cartItems: [...cartItems, item],
    }, () => {
      localStorage.setItem('cartItem', JSON.stringify(cartItems));
    });
  }

  // setLocalStorageCart() {
  //   const { cartItems } = this.state;
  //   localStorage.setItem('cartItem', JSON.stringify(cartItems));
  // }

  sumToCart(item) {
    this.setState((previousState) => ({
      itemsQtt: previousState.itemsQtt + item,
    }), () => {
      const { itemsQtt } = this.state;
      localStorage.setItem('itemsQtt', itemsQtt);
    });
  }

  render() {
    const { cartItems, itemsQtt } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={ () => (
              <MainPage
                handleCart={ this.handleCart }
                sumToCart={ this.sumToCart }
                itemsQtt={ itemsQtt }
              />
            ) }
          />
          <Route
            path="/shopping-cart"
            render={ () => (
              <ShoppingCart
                cartItems={ cartItems }
                sumToCart={ this.sumToCart }
              />
            ) }
          />
          <Route
            path="/details/:id"
            render={ (props) => (
              <ItemDetails
                handleCart={ this.handleCart }
                location={ props.location }
                sumToCart={ this.sumToCart }
                itemsQtt={ itemsQtt }
              />
            ) }
          />
          <Route
            path="/checkout-cart"
            render={ () => (
              <CheckoutCart
                cartItems={ cartItems }
              />
            ) }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
