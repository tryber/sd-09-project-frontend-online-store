import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ProductsShowcase from './Pages/ProductsShowcase';
import ShoppingCart from './Pages/ShoppingCart';
import ProductDetails from './Pages/ProductDetails';

function App() {
  // getProductsFromCategoryAndQuery().then((categoryId, query) => { console.log(categoryId, query); });
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ ProductsShowcase } />
        <Route path="/shopping-cart" component={ ShoppingCart } />
        <Route
          path="/product/:idCategory/:idProduct"
          render={ (props) => <ProductDetails { ...props } /> }
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
