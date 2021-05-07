import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Cart from './pages/Cart';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Checkout from './components/Checkout';

class App extends React.Component {
  constructor(props) {
    super(props);
    const currentCart = localStorage.getItem('cart');
    this.state = {
      cartItems: currentCart || [],
    };
  }

  render() {
    const { cartItems } = this.state;
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              component={ Home }
            />
            <Route
              path="/pages/cart"
              component={ Cart }
            />
            <Route path="/pages/details/:id" component={ ProductDetails } />
            <Route
              path="/pages/checkout"
              render={ () => <Checkout cartItems={ cartItems } /> }
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
