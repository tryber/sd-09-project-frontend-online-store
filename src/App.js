import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CartButton from './components/CartButton';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={ () => (<ProductList />) }
          />
          <Route path="/cart" render={ (props) => (<CartButton { ...props } />) } />
          <Route
            path="/product/:id"
            render={ (props) => (<ProductDetails { ...props } />) }
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
