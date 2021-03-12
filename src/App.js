import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Checkout from './components/Checkout';
import InitialPage from './components/InitialPage';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={ () => <InitialPage /> } />
          <Route exact path="/cart" render={ () => <ShoppingCart /> } />
          <Route exact path="/checkout" render={ () => <Checkout /> } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
