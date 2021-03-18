import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListCategorie extends Component {
  render() {
    const { categories, onChange, onClick } = this.props;
    if (categories.length === 0) return null;

    return (
      <select onChange={ onChange }>
        <option value="">selecione uma categoria</option>
        {categories.map((categorie, index) => (
          <option
            data-testid="category"
            key={ index }
            value={ categorie.id }
            onClick={ onClick }
          >
            { categorie.name }
          </option>
        ))}
      </select>
    );
  }
}

ListCategorie.propTypes = {
  categories: PropTypes.arrayOf({}).isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ListCategorie;
