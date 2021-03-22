import React, { Component } from 'react';
import '../styles/components/SearchBar.css';
import PropTypes from 'prop-types';
import CartIcon from './CartIcon';

class SearchBar extends Component {
  render() {
    const { handleSearchClick, handleChange, value, cartLength } = this.props;
    return (
      <div className="search-bar-container">
        <div className="search-bar-wrapper">
          <div>
            <input
              className="App"
              type="text"
              onChange={ handleChange }
              value={ value }
              data-testid="query-input"
            />
            <button
              type="button"
              data-testid="query-button"
              onClick={ handleSearchClick }
            >
              Buscar
            </button>
          </div>
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        </div>
        <CartIcon cartLength={ cartLength } />
      </div>
    );
  }
}

SearchBar.propTypes = {
  handleSearchClick: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  cartLength: PropTypes.number.isRequired,
};

export default SearchBar;
