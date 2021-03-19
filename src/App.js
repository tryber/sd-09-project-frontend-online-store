import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './services/Home';
import ShoppingCart from './services/ShoppingCart';
import ProductDetails from './services/ProductDetails';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={ Home } />
        <Route path="/productdetails" component={ ProductDetails } />
        <Route path="/shoppingcart" component={ ShoppingCart } />
      </BrowserRouter>
    );
  }
}

export default App;
