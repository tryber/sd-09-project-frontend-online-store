import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const { query, getProducts, handleChange } = this.props;
    return (
      <div>
        <input
          value={ query }
          onChange={ handleChange }
          data-testid="query-input"
          type="text"
        />
        <button data-testid="query-button" onClick={ getProducts } type="button">
          Buscar
        </button>
      </div>
    );
  }
}

SearchBar.propTypes = {
  query: PropTypes.string,
  getProducts: PropTypes.func,
  handleChange: PropTypes.func,
}.isRequired;

export default SearchBar;
