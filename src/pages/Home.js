import React from 'react';
import CartButton from '../components/CartButton';
import Categories from '../components/Categories';
import SearchForm from '../components/SearchForm';
import SearchResult from '../components/SearchResult';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';

class Home extends React.Component {
  constructor() {
    super();
    const currentCart = localStorage.getItem('cart');
    this.state = {
      searchField: '',
      productsList: [],
      categories: [],
      radioValue: '',
      cartItems: currentCart || [],
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputSubmit = this.handleInputSubmit.bind(this);
    this.handleInputRadio = this.handleInputRadio.bind(this);
  }

  componentDidMount() {
    this.getCategoriesList();
  }

  handleInputChange(event) {
    this.setState({
      searchField: event.target.value,
    });
  }

  async handleInputSubmit(event) {
    event.preventDefault();
    const { searchField, radioValue } = this.state;
    if (searchField || radioValue) {
      const response = await getProductsFromCategoryAndQuery(radioValue, searchField);
      this.setState({
        productsList: response.results,
      });
    }
  }

  async handleInputRadio(event) {
    this.setState({
      radioValue: await event.target.value,
    });
    await this.getQueryList();
  }

  async getQueryList() {
    const { radioValue } = this.state;
    const response = await getProductsFromCategoryAndQuery(radioValue);
    this.setState({
      productsList: response.results,
    });
    console.log(response.results);
  }

  async getCategoriesList() {
    const categoriesList = await getCategories();
    this.setState({
      categories: categoriesList,
    });
  }

  render() {
    const { categories, productsList, cartItems } = this.state;
    return (
      <>
        <SearchForm
          submitCallback={ this.handleInputSubmit }
          handleInputChange={ this.handleInputChange }
        />
        <CartButton />
        <Categories
          categories={ categories }
          handleInputRadio={ this.handleInputRadio }
        />
        <SearchResult
          productsList={ productsList }
          cartItems={ cartItems }
        />
      </>
    );
  }
}

export default Home;
