import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductList from './pages/ProductList';
import ProductDetails from './pages/ProductDetails';
import ShoppingCart from './pages/ShoppingCart';
import './styles/App.css';
import CheckoutOrder from './pages/CheckoutPage';
import Form from './components/Forms';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.addToCart = this.addToCart.bind(this);
    this.getProductFromCard = this.getProductFromCard.bind(this);
    this.getCheckout = this.getCheckout.bind(this);
    this.state = {
      product: {},
      shoppingCart: [],
      checkout: [],
    };
  }

  getCheckout(checkout) {
    this.setState({
      checkout,
    });
  }

  getProductFromCard(event, currentProduct) {
    if (event.target.className === 'shopping-card') {
      const { shoppingCart } = this.state;
      const product = shoppingCart.some((obj) => obj.id === currentProduct.id);
      if (!product) {
        this.setState({
          product: currentProduct,
        }, () => this.addToCart());
      }
    }
    this.setState({ product: currentProduct });
  }

  addToCart() {
    const { shoppingCart, product } = this.state;
    product.quantity = 1;
    this.setState({ shoppingCart: [...shoppingCart, product] });
  }

  render() {
    const { shoppingCart, product, checkout } = this.state;
    return (
      <BrowserRouter>
        <div className="App">
          <Route>
            <Switch>
              <Route
                exact
                path="/"
                render={ (props) => (
                  <ProductList
                    { ...props }
                    getProductFromCard={ this.getProductFromCard }
                  />) }
              />
              <Route
                path="/shopping-cart"
                render={ (props) => (
                  <ShoppingCart
                    { ...props }
                    shoppingCart={ shoppingCart }
                    getCheckout={ this.getCheckout }
                  />
                ) }
              />
              <Route
                path="/product-details"
                render={ (props) => (
                  <ProductDetails
                    { ...props }
                    product={ product }
                    getProductFromCard={ this.getProductFromCard }
                  />) }
              />
              <Route
                path="/checkout"
                render={ (props) => (
                  <>
                    <CheckoutOrder { ...props } checkout={ checkout } />
                    <Form />
                  </>
                ) }
              />
            </Switch>
          </Route>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
