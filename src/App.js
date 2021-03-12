import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import ShoppingCart from './pages/ShoppingCart';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/shopping-cart" component={ ShoppingCart } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
