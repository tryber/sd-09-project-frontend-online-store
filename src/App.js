import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import Checkout from './pages/Checkout';
import ProductDetails from './pages/ProductDetails';
import './App.css';
// import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Router>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/ShoppingCart" component={ ShoppingCart } />
          <Route path="/Checkout" component={ Checkout } />
          <Route path="/:category/:id" component={ ProductDetails } />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
