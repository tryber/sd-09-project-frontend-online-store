import React from 'react';
import PropTypes from 'prop-types';

import * as api from './api';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',

    };

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  async handleClick() {
    const { sentProducts, category } = this.props;
    const { inputValue } = this.state;
    const productsFromApi = await api
      .getProductsFromCategoryAndQuery(category, inputValue);
    sentProducts(productsFromApi, inputValue);
  }

  handleOnChange({ target }) {
    const { value } = target;
    this.setState({
      inputValue: value,
    });
  }

  render() {
    const { inputValue } = this.state;
    return (
      <nav>
        <input
          data-testid="query-input"
          type="text"
          value={ inputValue }
          name="searchBar"
          onChange={ this.handleOnChange }
        />
        <button
          data-testid="query-button"
          type="button"
          onClick={ this.handleClick }
        >
          Buscar
        </button>
      </nav>
    );
  }
}

SearchBar.propTypes = {
  sentProducts: PropTypes.func.isRequired,

}.isRequired;

export default SearchBar;
