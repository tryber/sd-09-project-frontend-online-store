import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import * as api from './services/api';
import ProductDetails from './components/ProductDetails';
import Checkout from './pages/Checkout';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      products: [],
      input: '',
      emptyCart: true,
      cartItems: [],
      cartLength: 0,
    };
    this.addProductToCart = this.addProductToCart.bind(this);
    this.apiRequest = this.apiRequest.bind(this);
    this.handleCategoryClick = this.handleCategoryClick.bind(this);
    this.handleSearchClick = this.handleSearchClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.removeItemFromCart = this.removeItemFromCart.bind(this);
    this.emptyShoppingCart = this.emptyShoppingCart.bind(this);
    this.updateCartItemsLength = this.updateCartItemsLength.bind(this);
    this.getCartItem = this.getCartItem.bind(this);
  }

  async componentDidMount() {
    await this.apiRequest();
    const storage = sessionStorage.getItem('cart');
    if (storage !== null) {
      const arr = storage.split(',');
      arr.forEach((item, index) => {
        if (item.includes('MLB')) {
          this.getCartItem(item, arr[index + 1]);
        }
      });
    }
  }

  componentWillUnmount() {
    const { cartItems } = this.state;
    const arr = [];
    cartItems.forEach((item) => {
      arr.push(item.id);
      arr.push(item.amount);
    });
    sessionStorage.setItem('cart', arr);
  }

  async handleSearchClick() {
    const { input } = this.state;
    let products = [];
    if (input.length !== 0) {
      products = await api.getProductsFromCategoryAndQuery('', input);
    } else {
      products = await api.getProductsFromCategoryAndQuery();
    }
    this.setState({
      products: products.results,
    });
  }

  handleChange({ target }) {
    this.setState({
      input: target.value,
    });
  }

  async handleCategoryClick({ target }) {
    const { id } = target;
    const selectedProducts = await api.getProductsFromCategoryAndQuery(id, '');
    this.setState({
      products: selectedProducts.results,
    });
  }

  getCartItem(id, quant) {
    const { products, cartItems } = this.state;
    const product = products.find((item) => item.id === id);
    product.amount = parseInt(quant, 10);
    this.setState((prevState) => ({
      cartItems: [...prevState.cartItems, product],
      emptyCart: false,
    }));
    this.updateCartItemsLength([...cartItems, product]);
  }

  async apiRequest() {
    const { getCategories, getProductsFromCategoryAndQuery } = api;
    const products = await getProductsFromCategoryAndQuery();
    const categories = await getCategories();
    if (products === undefined) {
      this.setState({
        categories,
      });
    } else {
      this.setState({
        categories,
        products: products.results,
      });
    }
  }

  addProductToCart(productId) {
    const { products, cartItems } = this.state;
    const product = products.find((item) => item.id === productId);
    if ((cartItems.some((item) => item.id === productId))) {
      cartItems.forEach((item) => {
        if ((item.id === productId) && (item.available_quantity > item.amount)) {
          item.amount += 1;
        }
      });
      this.updateCartItemsLength(cartItems);
    } else {
      product.amount = 1;
      this.setState((prevState) => ({
        cartItems: [...prevState.cartItems, product],
        emptyCart: false,
      }));
      this.updateCartItemsLength([...cartItems, product]);
    }
  }

  removeItemFromCart(productId) {
    const { cartItems } = this.state;
    const newCartItems = cartItems
      .filter((item) => (item.id !== productId) && item);
    this.updateCartItemsLength(newCartItems);
    if (newCartItems.length === 0) {
      this.setState({
        emptyCart: true,
      });
    }
    this.setState({
      cartItems: newCartItems,
    });
  }

  emptyShoppingCart() {
    this.setState({
      cartItems: [],
      emptyCart: true,
    });
    this.updateCartItemsLength([]);
  }

  updateCartItemsLength(newCartItems) {
    if (newCartItems !== undefined) {
      const cartLength = newCartItems.reduce((total, item) => {
        total += item.amount;
        return total;
      }, 0);
      this.setState({
        cartLength,
      });
    }
  }

  render() {
    const { emptyCart, cartItems, input, products, categories, cartLength } = this.state;
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route
              path="/shopping-cart"
              render={ () => (<ShoppingCart
                emptyCart={ emptyCart }
                cartItems={ cartItems }
                removeItemFromCart={ this.removeItemFromCart }
                updateCartItemsLength={ this.updateCartItemsLength }
              />) }
            />
            <Route
              path="/productDetails/:ship"
              render={ (props) => (<ProductDetails
                { ...props }
                products={ products }
                addProductToCart={ this.addProductToCart }
                cartLength={ cartLength }
              />) }
            />
            <Route
              path="/checkout"
              render={ (props) => (<Checkout
                { ...props }
                cartItems={ cartItems }
                emptyShoppingCart={ this.emptyShoppingCart }
              />) }
            />
            <Route
              path="/"
              render={ () => (<Home
                addProductToCart={ this.addProductToCart }
                handleChange={ this.handleChange }
                handleSearchClick={ this.handleSearchClick }
                handleCategoryClick={ this.handleCategoryClick }
                categories={ categories }
                inputValue={ input }
                products={ products }
                cartLength={ cartLength }
              />) }
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
