import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const { handleClick, getInputValue } = this.props;
    return (
      <nav>
        <input
          onChange={ getInputValue }
          data-testid="query-input"
          type="text"
        />
        <button
          onClick={ handleClick }
          data-testid="query-button"
          type="button"
        >
          Buscar
        </button>
      </nav>
    );
  }
}

const { func } = PropTypes;
SearchBar.propTypes = {
  handleClick: func,
  setInputValue: func,
}.isRequired;

export default SearchBar;
