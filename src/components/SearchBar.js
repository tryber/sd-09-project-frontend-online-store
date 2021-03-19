import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SearchBar extends Component {
  render() {
    const { textInputCallback, submitCallback, children } = this.props;

    return (
      <section className="SearchBar">
        <input
          id="Search-input"
          type="text"
          placeholder="Exemplo"
          onChange={ textInputCallback }
          data-testid="query-input"
        />
        <button
          type="submit"
          onClick={ submitCallback }
          data-testid="query-button"
        >
          Buscar
        </button>
        { children }
      </section>
    );
  }
}

SearchBar.propTypes = {
  textInputCallback: PropTypes.func.isRequired,
  submitCallback: PropTypes.func.isRequired,
  children: PropTypes.node,
};

SearchBar.defaultProps = {
  children: null,
};
