import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ShoppingCart from './pages/ShoppingCart';
import './App.css';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/ShoppingCart" component={ ShoppingCart } />
      </Switch>
    </Router>
  );
}

export default App;
