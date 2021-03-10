import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import * as api from './services/api';
import ProductsShowcase from './components/ProductsShowcase';

function App() {
  api.getCategories().then((categories) => { console.log(categories); });
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ ProductsShowcase } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
