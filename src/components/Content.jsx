import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import ProductDetails from './productDetails';
import SearchBar from './SearchBar';
import ShopCart from './ShopCart';

class Content extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={ SearchBar } />
          <Route exact path="/shopping-cart" component={ ShopCart } />
          <Route exact path="/product-details/:id" component={ ProductDetails } />
        </Switch>
      </main>
    );
  }
}

export default Content;
