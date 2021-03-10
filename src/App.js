import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductList from './pages/ProductList';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={ ProductList } />
        </Switch>
      </Router>
    );
  }
}

export default App;
