import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ProductsShowcase from './Pages/ProductsShowcase';
import ShoppingCart from './Pages/ShoppingCart';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ ProductsShowcase } />
        <Route path="/shopping-cart" component={ ShoppingCart } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
