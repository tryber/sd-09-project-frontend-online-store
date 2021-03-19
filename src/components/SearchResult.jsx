import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ItemCard from './ItemCard';

class SearchResult extends Component {
  render() {
    const { update } = this.props;
    const { result } = this.props;
    if (result.length !== 0) {
      return (
        <section className="flex-result">
          {result.map((element) => (
            <ItemCard
              key={ element.id }
              id={ element.id }
              title={ element.title }
              thumbnail={ element.thumbnail }
              price={ element.price }
              result={ element }
              update={ update }
            />
          ))}
        </section>
      );
    }
    return <div>Vazio</div>;
  }
}

SearchResult.propTypes = {
  result: PropTypes.arrayOf(Object).isRequired,
  update: PropTypes.func.isRequired,
};

export default SearchResult;
