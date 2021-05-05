import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home, ShoppingCart, Details } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/meucarrinho" component={ ShoppingCart } />
        <Route path="/details/:id/" render={ (props) => <Details { ...props } /> } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
