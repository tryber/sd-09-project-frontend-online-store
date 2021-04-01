import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CartPage from './pages/CartPage';
import HomePage from './pages/HomePage';
import InputContext from './components/InputContext';
import ProductDetails from './pages/ProductDetails';
import Header from './components/Header';
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      selectedCategory: '',
      cartProducts: Object.keys(localStorage).includes('cartProducts')
        ? JSON.parse(localStorage.getItem('cartProducts')) : [],
      reviews: Object.keys(localStorage).includes('reviews')
        ? JSON.parse(localStorage.getItem('reviews')) : [],
      setInputValue: this.setInputValue.bind(this),
      setSelectedCategory: this.setSelectedCategory.bind(this),
      addProductToCart: this.addProductToCart.bind(this),
      removeProductFromCart: this.removeProductFromCart.bind(this),
      saveNewReview: this.saveNewReview.bind(this),
    };
  }

  setInputValue(inputValue) {
    this.setState({ inputValue });
  }

  setSelectedCategory(selectedCategory) {
    this.setState({ selectedCategory });
  }

  addProductToCart(...newProduct) {
    this.setState(
      (prevState) => (
        { cartProducts: [...prevState.cartProducts, ...newProduct] }
      ),
      () => {
        const { cartProducts } = this.state;
        localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
      },
    );
  }

  removeProductFromCart(id) {
    this.setState(
      ({ cartProducts }) => {
        const indexOfProduct = cartProducts.reverse()
          .findIndex(({ id: productId }) => id === productId);
        const correctedIndex = (cartProducts.length - 1) - indexOfProduct;
        return {
          cartProducts: cartProducts.filter((_, index) => index !== correctedIndex),
        };
      },
      () => {
        const { cartProducts } = this.state;
        localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
      },
    );
  }

  saveNewReview({ id, review }) {
    const { reviews } = this.state;
    review = [review];
    for (let index = 0; index < reviews.length; index += 1) {
      const { id: stateID, reviews: stateReviews } = reviews[index];
      if (id === stateID) {
        review = [stateReviews, review].flat();
        reviews.splice(index, 1);
        break;
      }
    }
    this.setState(
      (prevState) => (
        { reviews: [...prevState.reviews, { id, reviews: review }] }
      ),
      () => {
        const { reviews: updatedReviews } = this.state;
        localStorage.setItem('reviews', JSON.stringify(updatedReviews));
      },
    );
  }

  render() {
    const {
      inputValue,
      setInputValue,
      cartProducts,
      reviews,
      selectedCategory,
      setSelectedCategory,
      addProductToCart,
      removeProductFromCart,
      saveNewReview,
    } = this.state;

    return (
      <InputContext.Provider
        value={ {
          inputValue,
          setInputValue,
          cartProducts,
          reviews,
          selectedCategory,
          setSelectedCategory,
          addProductToCart,
          removeProductFromCart,
          saveNewReview } }
      >
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={ HomePage } />
            <Route path="/cart/checkout" component={ CheckoutPage } />
            <Route path="/cart" component={ CartPage } />
            <Route
              path="/details/:id"
              render={ (props) => <ProductDetails { ...props } /> }
            />
          </Switch>
        </Router>
      </InputContext.Provider>
    );
  }
}

export default App;
