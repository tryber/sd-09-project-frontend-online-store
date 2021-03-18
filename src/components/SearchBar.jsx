import React from 'react';
import PropTypes from 'prop-types';
import '../styles/components/SearchBar.css';
import ShoppingCartButton from './ShoppingCartButton';

class SearchBar extends React.Component {
  render() {
    const { onSearchTextChange, getProducts } = this.props;
    return (
      <header>
        <div className="search-bar-container">
          <input
            className="search-bar-input"
            type="text"
            id="search"
            name="search"
            data-testid="query-input"
            onChange={ onSearchTextChange }
          />
          <button
            className="search-bar-button"
            type="button"
            data-testid="query-button"
            onClick={ getProducts }
          >
            Pesquisar
          </button>
          <ShoppingCartButton />
        </div>
      </header>
    );
  }
}

SearchBar.propTypes = {
  onSearchTextChange: PropTypes.func.isRequired,
  getProducts: PropTypes.func.isRequired,
};

export default SearchBar;
