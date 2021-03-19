import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AbstractCartHandler from './components/AbstractCartHandler';
import CartShop from './pages/CartShop';
import ProductList from './pages/ProductList';
import ProductDetails from './pages/ProductDetails';
import Checkout from './pages/Checkout';

export default class App extends AbstractCartHandler {
  render() {
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={ (props) => (<ProductList
              { ...props }
              cartHandler={ this.cartHandler }
            />) }
          />
          <Route
            exact
            path="/checkout"
            render={ (props) => (<Checkout
              { ...props }
              cartHandler={ this.cartHandler }
            />) }
          />
          <Route
            path="/cartshop"
            render={ (props) => (<CartShop
              { ...props }
              cartHandler={ this.cartHandler }
            />) }
          />
          <Route
            path="/product-details/:id"
            render={ (props) => (<ProductDetails
              { ...props }
              cartHandler={ this.cartHandler }
            />) }
          />
        </Switch>
      </Router>
    );
  }
}
