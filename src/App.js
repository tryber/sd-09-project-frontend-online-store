import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Search from './Pages/Search';
import Carrinho from './Pages/Carrinho';
import SingleView from './Pages/SingleView';
import Checkout from './Pages/Checkout';
import NotFound from './Pages/NotFound';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.shoppingCartChange = this.shoppingCartChange.bind(this);
    this.returnCartTotal = this.returnCartTotal.bind(this);
    this.saveStorage = this.saveStorage.bind(this);

    this.state = {
      totalShoppingCart: [],
    };
  }

  saveStorage(value) {
    this.setState((prevState) => ({
      totalShoppingCart: [...prevState.totalShoppingCart, value],
    }), () => {
      const { totalShoppingCart } = this.state;
      localStorage.setItem('totalShoppingCart', JSON.stringify(totalShoppingCart));
      this.forceUpdate();
    });
  }

  shoppingCartChange(value) {
    const resultTotalShoppingCart = JSON.parse(localStorage.getItem('totalShoppingCart'));
    if (!resultTotalShoppingCart) {
      this.saveStorage(value);
      return;
    }

    this.setState({ totalShoppingCart: resultTotalShoppingCart },
      () => {
        this.saveStorage(value);
      });
  }

  returnCartTotal() {
    const resultTotalCart = JSON.parse(localStorage.getItem('totalShoppingCart'));
    if (!resultTotalCart) return;

    return (<p data-testid="shopping-cart-size">{resultTotalCart.length}</p>);
  }

  render() {
    const { totalShoppingCart } = this.state;

    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={ () => (
              <Search
                totalCartNumber={ this.returnCartTotal }
                totalCart={ this.shoppingCartChange }
              />) }
          />
          <Route
            path="/carrinho"
            render={ () => (
              <Carrinho
                totalCart={ totalShoppingCart }
              />) }
          />
          <Route
            path="/productDetails/:id"
            render={ (props) => (
              <SingleView
                totalCart={ this.shoppingCartChange }
                { ...props }
                totalCartNumber={ this.returnCartTotal }
              />) }
          />
          <Route path="/checkout" component={ Checkout } />
          <Route component={ NotFound } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
