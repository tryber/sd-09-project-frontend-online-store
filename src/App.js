import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
// import * as api from './services/api';
import Home from './Components/homePage';
import EmptyCart from './Components/emptyCart';
import Checkout from './Components/checkout';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={ Home } />
      <Route path="/emptyCart" component={ EmptyCart } />
      <Route path="/checkout" component={ Checkout } />
    </BrowserRouter>
  );
}

export default App;
