import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductList from './pages/ProductList';
import ShoppingCart from './pages/ShoppingCart';
import ProductDetails from './pages/ProductDetails';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={ ProductList } />
          <Route path="/cart" component={ ShoppingCart } />
          <Route path="/product/:id" component={ ProductDetails } />
        </Switch>
      </Router>
    );
  }
}

export default App;
