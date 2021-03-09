import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Cart from './pages/Cart';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={ LandingPage } />
      <Link to="/cart" data-testid="shopping-cart-button">Cart</Link>
      <Route path="/cart" component={ Cart } />
    </BrowserRouter>
  );
}

export default App;
