import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import shoppingCart from './shoppingCart';
import Checkout from './pages/Checkout';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Frontend Online Store - TrybeNiners - Group 8</h1>
        </header>
        <BrowserRouter>
          <Switch>
            <Route path="/checkout" component={ Checkout } />
            <Route path="/shoppingCart" component={ shoppingCart } />
            <Route path="/productdetails/:id" component={ ProductDetails } />
            <Route exact path="/" component={ Home } />
          </Switch>
        </BrowserRouter>
        <footer>
          <h3>
            Desenvolvido por:
            Diego Vinicius, Gabriel Lennox, Henrique Elias e Tiago Yoneda
          </h3>
        </footer>
      </div>
    );
  }
}

export default App;
