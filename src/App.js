import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import ShoppingCart from './components/ShoppingCart';
import ProductDetails from './components/ProductDetails';
import ShopFinish from './components/ShopFinish';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/shopping-cart" component={ ShoppingCart } />
          <Route path="/productdetails/:id/" component={ ProductDetails } />
          <Route render="/shopfinish" component={ ShopFinish } />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
