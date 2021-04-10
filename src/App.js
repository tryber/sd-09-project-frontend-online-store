import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ProductDetails from './pages/ProductDetails';
import ProductList from './pages/ProductList';
import ShoppingCart from './pages/ShoppingCart';
import PaymentDetails from './pages/PaymentDetails';
// import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={ ProductList } />
      <Route path="/shopping-cart" component={ ShoppingCart } />
      <Route path="/product-details" component={ ProductDetails } />
      <Route path="/payment-details" component={ PaymentDetails } />
    </BrowserRouter>
  );
}

export default App;
