import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CategoryInput from './CategoryInput';

require('./CategoriesList.css');

export default class CategoriesList extends Component {
  render() {
    const { categories, selectionCallback } = this.props;

    return (
      <div className="CategoriesList">
        <p>Categorias: </p>
        { categories.map(({ name, id }) => (
          <CategoryInput
            key={ id }
            name={ name }
            id={ id }
            selectionCallback={ selectionCallback }
          />)) }
      </div>
    );
  }
}

CategoriesList.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string,
    }),
  ).isRequired,
  selectionCallback: PropTypes.func,
};

CategoriesList.defaultProps = {
  selectionCallback: () => { console.log('No event to handle.'); },
};
