import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from './pages/MainPage';
import CartPage from './pages/CartPage';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ MainPage } />
        <Route path="/cartPage" component={ CartPage } />
        <Route path="/productDetails" component={ ProductDetails } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
