import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const { onSearchTextChange, onClickSearch } = this.props;
    return (
      <div>
        <input
          type="text"
          data-testid="query-input"
          onChange={ onSearchTextChange }
          name="search"
        />
        <button
          type="button"
          data-testid="query-button"
          onClick={ onClickSearch }
        >
          Buscar
        </button>
      </div>
    );
  }
}

SearchBar.propTypes = {
  onSearchTextChange: PropTypes.func.isRequired,
  onClickSearch: PropTypes.func.isRequired,
};

export default SearchBar;
