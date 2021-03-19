import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as fetchAPI from '../services/api';
import CategoriesList from '../components/CategoriesList';
import SearchBar from '../components/SearchBar';
import CartIcon from '../components/CartIcon';
import SearchStatusMsg from '../components/SearchStatusMsg';
import LoadingMsg from '../components/LoadingMsg';
import SearchResults from '../components/SearchResults';

require('./ProductList.css');

export default class ProductList extends Component {
  constructor() {
    super();

    this.state = {
      loading: false,
      categories: undefined,
      selectedCategory: '',
      search: '',
      results: [],
      statusMessage: 'Digite algum termo de pesquisa ou escolha uma categoria.',
    };
    // Bind methods
    this.fetchCategories = this.fetchCategories.bind(this);
    this.updateSearchValue = this.updateSearchValue.bind(this);
    this.submitSearch = this.submitSearch.bind(this);
    this.selectCategory = this.selectCategory.bind(this);
  }

  componentDidMount() {
    this.fetchCategories();
  }

  async submitSearch() {
    this.setState({ loading: true });

    const { search, selectedCategory } = this.state;
    const { results } = await fetchAPI
      .getProductsFromCategoryAndQuery(selectedCategory, search);

    this.setState({
      results,
      loading: false,
    });
  }

  updateSearchValue(event) {
    const { value: search } = event.target;
    this.setState({ search });
  }

  async fetchCategories() {
    const categories = await fetchAPI.getCategories();
    this.setState({ categories });
  }

  selectCategory(event) {
    const { target: { value: selectedCategory } } = event;
    this.setState({ selectedCategory }, this.submitSearch);
  }

  render() {
    const { results, loading, categories, statusMessage } = this.state;
    const { cartHandler } = this.props;
    const noSearchResults = results.length === 0 && !loading;

    return (
      <div className="ProductList">
        {
          categories
            ? (
              <CategoriesList
                categories={ categories }
                selectionCallback={ this.selectCategory }
              />
            )
            : <LoadingMsg />
        }
        <div className="SearchArea">
          <div>
            <SearchBar
              textInputCallback={ this.updateSearchValue }
              submitCallback={ this.submitSearch }
            >
              <CartIcon cartHandler={ cartHandler } />
            </SearchBar>
            { noSearchResults
              ? <SearchStatusMsg text={ statusMessage } />
              : (
                <SearchResults
                  loading={ loading }
                  results={ results }
                  cartHandler={ cartHandler }
                />
              )}
          </div>
        </div>
      </div>
    );
  }
}

ProductList.propTypes = {
  cartHandler: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.object,
    ).isRequired,
    add: PropTypes.func.isRequired,
    size: PropTypes.func.isRequired,
    total: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
    changeQuantityOf: PropTypes.func.isRequired,
  }).isRequired,
};
