import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductList from './components/ProductList';
import './App.css';
import Cart from './components/Cart';
import * as api from './services/api';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      categories: [],
    };
  }

  async componentDidMount() {
    await api.getCategories()
      .then((response) => this.setState({
        categories: response,
      }));
  }

  render() {
    const { categories, products } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={ () => (
              <ProductList
                categories={ categories }
                searchedProducts={ products }
                handleChange={ this.handleChange }
              />
            ) }
          />
          <Route path="/cart" component={ Cart } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
