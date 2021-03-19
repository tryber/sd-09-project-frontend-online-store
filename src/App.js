import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';
import ProductDetails from './components/ProductDetails';
import CheckoutCart from './components/CheckoutCart';
import './App.css';

function App() {
  localStorage.setItem('products', []);
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ ProductList } />
        <Route exact path="/shopping-cart" component={ ShoppingCart } />
        <Route
          path="/product/:id"
          render={ (props) => <ProductDetails { ...props } /> }
        />
        <Route path="/checkout" component={ CheckoutCart } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
