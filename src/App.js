import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import ShoppingCart from './components/ShoppingCart';
import ProductDetails from './components/ProductDetails';
import Checkout from './components/Checkout';

function App() {
  return (
    <Router>
      <div className="page-title">
        <h1>FrontEnd Online Store</h1>
      </div>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/cart" component={ ShoppingCart } />
        <Route
          path="/details/:id"
          component={ ProductDetails }
        />
        <Route
          path="/checkout"
          component={ Checkout }
        />
      </Switch>
    </Router>
  );
}

export default App;
