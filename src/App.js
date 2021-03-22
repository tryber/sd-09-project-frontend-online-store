import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Cart from './pages/Cart';
import DetailedProduct from './pages/DetailedProduct';
import Checkout from './pages/Checkout';
import NotFound from './pages/NotFound';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route
            path="/cart"
            render={ (props) => (<Cart
              {
                ...props }
            />) }
          />
          <Route
            path="/detailed-product/:id"
            render={ (props) => <DetailedProduct { ...props } /> }
          />
          <Route path="/checkout" component={ Checkout } />
          <Route exact path="/" component={ Home } />
          <Route component={ NotFound } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
