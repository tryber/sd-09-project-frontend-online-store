import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.addItemToCart = this.addItemToCart.bind(this);

    this.state = {
      cartList: [],
    };
  }

  addItemToCart(newItem) {
    const { cartList } = this.state;
    this.setState({
      cartList: [...cartList, newItem],
    });
  }

  render() {
    const { cartList } = this.state;

    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={ () => (
              <ProductList
                cartList={ cartList }
                addItemToCart={ this.addItemToCart }
              />) }
          />
          <Route
            path="/product/:id"
            render={ (props) => (
              <ProductDetail addItemToCart={ this.addItemToCart } { ...props } />) }
          />
          <Route path="/cart" render={ () => <Cart cartList={ cartList } /> } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
