import React from 'react';

class SearchedProducts extends React.Component {
  constructor() {
    super();

    this.state = {
      search: false,
    };
  }

  render() {
    const { clickGetProducts, searchTerm } = this.props;
    return (
      <section>
        <button
          type="button"
          data-testid="query-button"
          onClick={ () => clickGetProducts('MLB271599', searchTerm) }
        >
          pesquisar
        </button>
      </section>
    );
  }
} export default SearchedProducts;
