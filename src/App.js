import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import ShoppingCart from './components/ShoppingCart';
import Checkout from './pages/Checkout';
import Details from './pages/Details';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={ Home } />
        <Route path="/shopping-cart" component={ ShoppingCart } />
        <Route path="/checkout" component={ Checkout } />
        <Route
          path="/details/:idCategory/:idProduct"
          render={ (props) => <Details { ... props } /> }
        />
      </BrowserRouter>
    );
  }
}

export default App;
