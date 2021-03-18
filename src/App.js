import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import InitialPage from './pages/InitialPage';
import ProductDetails from './pages/ProductDetails';
import ShoppingCart from './pages/ShoppingCart';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ InitialPage } />
        <Route path="/ShoppingCart" component={ ShoppingCart } />
        <Route
          path="/product-details/:id"
          render={ (props) => <ProductDetails { ...props } /> }
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
