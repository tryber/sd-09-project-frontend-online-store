import React from 'react';
import PropTypes from 'prop-types';

class CategoriesList extends React.Component {
  render() {
    const { categoriesArray, onChangeCategoriesInput } = this.props;
    return (
      <ol>
        Lista de categorias
        {categoriesArray.length > 0 && categoriesArray
          .map(({ id, name }) => (
            <li key={ id }>
              <input
                data-testid="category"
                type="radio"
                onChange={ onChangeCategoriesInput }
                value={ id }
                name="name"
              />
              { name }
            </li>))}
      </ol>
    );
  }
}

CategoriesList.propTypes = {
  categoriesArray: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChangeCategoriesInput: PropTypes.func.isRequired,
};

export default CategoriesList;
