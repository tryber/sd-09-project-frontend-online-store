import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ShoppingCart from './components/ShoppingCart';
import ItemDetails from './pages/ItemDetails';
import Checkout from './pages/Checkout';
import './App.css';

function App() {
  return (
    <Router>
      <Route exact path="/" component={ HomePage } />
      <Route path="/shopping-cart" component={ ShoppingCart } />
      <Route path="/item-details" component={ ItemDetails } />
      <Route path="/checkout" component={ Checkout } />
    </Router>
  );
}

export default App;
