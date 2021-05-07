import React from 'react';

class SearchButton extends React.Component {
  render() {
    return (
      <button
        type="submit"
        data-testid="query-button"
      >
        Pesquisar
      </button>
    );
  }
}

export default SearchButton;
