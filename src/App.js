import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Search from './Search';
import Carrinho from './Carrinho';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Search } />
        <Route exact path="/carrinho" component={ Carrinho } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;