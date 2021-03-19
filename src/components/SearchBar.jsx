import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    const { searchText, search, textChange } = this.props;
    return (
      <>
        <form action="">
          <input
            data-testid="query-input"
            type="text"
            name="searchText"
            value={ searchText }
            onChange={ textChange }
            id=""
          />
          <button
            data-testid="query-button"
            type="button"
            onClick={ search }
          >
            Pesquisar!
          </button>
        </form>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  search: PropTypes.func.isRequired,
  textChange: PropTypes.func.isRequired,
};

export default SearchBar;
