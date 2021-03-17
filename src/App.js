import React from 'react';
import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ShoppingCart from './components/shopping_cart/ShoppingCart';
import ProductList from './ProductList';
import ProductDetailed from './components/ProductDetailed';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          component={ ProductList }
        />
        <Route path="/ShoppingCart" component={ ShoppingCart } />
        <Route
          path="/ProductDetailed/:id"
          render={ (props) => <ProductDetailed { ...props } /> }
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
