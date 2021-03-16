import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Cart from './Cart';
import CheckOut from './CheckOut';
import ProductDetail from './ProductDetail';

class App extends Component {
  constructor(props) {
    super(props);
    const itemsCartStorage = JSON.parse(localStorage.getItem('itemsCart' || []));
    this.state = {
      itemsCart: itemsCartStorage,
    };
    this.handleProduct = this.handleProduct.bind(this);
  }

  componentDidUpdate() {
    const { itemsCart } = this.state;
    if (itemsCart !== null) {
      localStorage.setItem('itemsCart', JSON.stringify(itemsCart));
    }
  }

  handleProduct(item) {
    const { itemsCart } = this.state;
    this.setState({
      itemsCart: [...itemsCart, item],
    }, () => {
      localStorage.setItem('itemsCart', JSON.stringify(itemsCart));
    });
  }

  render() {
    const { itemsCart } = this.state;
    const itemsQuantity = itemsCart === null ? 0 : itemsCart.length;
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={
                () => (<Home
                  handleProduct={ this.handleProduct }
                  totalProducts={ itemsQuantity }
                />)
              }
            />
            <Route
              path="/product-detail/:id"
              render={ (props) => (<ProductDetail
                handleProduct={ this.handleProduct }
                totalProducts={ itemsQuantity }
                location={ props.location }
              />) }
            />
            <Route
              path="/shopping-cart"
              render={ () => <Cart itemsCart={ itemsCart } /> }
            />
            <Route
              path="/checkout"
              render={ () => <CheckOut itemsCart={ itemsCart } /> }
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
