import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import ShoppingCart from './components/ShoppingCart';
import ProductDetails from './components/ProductDetails';
import OrderSummary from './components/OrderSummary';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/shopping-cart" component={ ShoppingCart } />
          <Route path="/product-detail/:categoryID/:id" component={ ProductDetails } />
          <Route path="/order-summary" component={ OrderSummary } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
