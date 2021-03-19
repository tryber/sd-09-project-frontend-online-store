import React from 'react';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import Header from '../components/Header';
import Main from '../components/Main';
import Aside from '../components/Aside';
import '../pageStyles/MainPage.css';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      inputValue: '',
      productsFromQuery: [{}],
      isFetchingFromQuery: false,
      itensAddToCart: [],
    };
    this.getProductsFromQuery = this.getProductsFromQuery.bind(this);
    this.getInputValue = this.getInputValue.bind(this);
    this.addProductToCart = this.addProductToCart.bind(this);
  }

  async componentDidMount() {
    await getCategories().then((data) => this
      .setState((lastState) => ({
        ...lastState,
        categories: data,
        loading: false,
      })));
  }

  async getProductsFromQuery(categoryId, query) {
    getProductsFromCategoryAndQuery(categoryId, query)
      .then((data) => this.setState((lastState) => ({
        ...lastState,
        productsFromQuery: data.results,
        isFetchingFromQuery: true,
      })));
  }

  getInputValue(value) {
    this.setState((lastState) => ({
      ...lastState,
      inputValue: value,
    }));
  }

  addProductToCart(productObject) {
    this.setState(({ itensAddToCart }) => ({
      itensAddToCart: [...itensAddToCart, productObject],
    }));
  }

  render() {
    const {
      categories, productsFromQuery,
      isFetchingFromQuery, inputValue,
      itensAddToCart,
    } = this.state;
    return (
      <>
        <Header
          getProductsFromQuery={ this.getProductsFromQuery }
          getInputValue={ this.getInputValue }
          itensAddToCart={ itensAddToCart }
        />
        <div className="main-container">
          <Aside
            categories={ categories }
            getProductsFromQuery={ this.getProductsFromQuery }
            inputValue={ inputValue }
          />
          <Main
            productsFromQuery={ productsFromQuery }
            isFetchingFromQuery={ isFetchingFromQuery }
            addProductToCart={ this.addProductToCart }
            itensAddToCart={ itensAddToCart }
          />
        </div>
      </>
    );
  }
}

export default MainPage;
