import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';
import FinishBuy from './pages/FinishBuy';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/productdetails" component={ ProductDetails } />
          <Route path="/cart" component={ Cart } />
          <Route path="/finishBuy" component={ FinishBuy } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
