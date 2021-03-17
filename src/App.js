import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import ShoppingCart from './ShoppingCart';
import ProductDetails from './ProductDetails';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listProduct: [],
    };
    this.addProduct = this.addProduct.bind(this);
    this.decrementProduct = this.decrementProduct.bind(this);
  }

  addProduct(product) {
    const { listProduct } = this.state;
    this.setState({
      listProduct: [...listProduct, product],
    });
  }

  decrementProduct(product) {
    const { listProduct } = this.state;
    const not = -1;
    const list = listProduct.slice();
    const index = list.slice().reverse().findIndex((item) => item.id === product.id);
    if (index !== not) {
      list.splice(list.length - 1 - index, 1);
      this.setState({
        listProduct: list,
      });
    }
  }

  render() {
    const { listProduct } = this.state;
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={ (props) => (
                <Home
                  { ...props }
                  addProduct={ this.addProduct }
                  listProduct={ listProduct }
                />
              ) }
            />
            <Route
              exact
              path="/shoppingcart"
              render={ ((props) => (
                <ShoppingCart
                  { ...props }
                  addProduct={ this.addProduct }
                  decrementProduct={ this.decrementProduct }
                  listProduct={ listProduct }
                />)) }
            />
            <Route
              exact
              path="/productDetails"
              render={ ((props) => (
                <ProductDetails
                  { ...props }
                  addProduct={ this.addProduct }
                  listProduct={ listProduct }
                />)) }
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
