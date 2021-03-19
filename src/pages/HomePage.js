import React, { Component } from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';

import FilterCategories from '../components/FilterCategories';
import CartButton from '../components/CartButton';
import SearchBar from '../components/SearchBar';
import SearchResult from '../components/SearchResult';

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      result: [],
      cartCount: 0,
    };

    this.addCategoryAndSearch = this.addCategoryAndSearch.bind(this);
    this.searchProducts = this.searchProducts.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleLocalStorage = this.handleLocalStorage.bind(this);
    this.updateCartCount = this.updateCartCount.bind(this);
  }

  componentDidMount() {
    this.handleLocalStorage();
  }

  handleLocalStorage() {
    const keys = Object.keys(localStorage)
      .filter((item) => item.includes('_itemCart_'));

    this.setState({
      cartCount: keys.length,
    });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  updateCartCount() {
    this.setState((prev) => ({
      cartCount: prev.cartCount + 1,
    }));
  }

  addCategoryAndSearch(event) {
    const { id } = event.target;
    this.searchProducts(id);
  }

  async searchProducts(categoryId = '') {
    const { searchText } = this.state;
    const result = await getProductsFromCategoryAndQuery(categoryId, searchText);
    const searchedItem = result.results;
    this.setState({
      result: searchedItem,
    });
  }

  render() {
    const { result, searchText, cartCount } = this.state;
    return (
      <main>
        <div className="search-area">
          <SearchBar
            search={ this.searchProducts }
            textChange={ this.handleChange }
            searchText={ searchText }
          />
          <CartButton cart={ cartCount } />
        </div>
        <section className="search--results">
          <FilterCategories filter={ this.addCategoryAndSearch } />
          <SearchResult result={ result } update={ this.updateCartCount } />
        </section>
      </main>
    );
  }
}

export default HomePage;
