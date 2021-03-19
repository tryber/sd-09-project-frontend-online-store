import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import DetailedDisplay from './pages/DetailedDisplay';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/shopping-cart" component={ ShoppingCart } />
          <Route
            path="/details-page/:id"
            render={ (props) => <DetailedDisplay { ...props } /> }
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
