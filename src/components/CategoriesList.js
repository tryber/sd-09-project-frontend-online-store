import React from 'react';
import PropTypes from 'prop-types';

class CategoriesList extends React.Component {
  render() {
    const { categoriesArray } = this.props;
    return (
      <ol>
        Lista de categorias
        {categoriesArray.length > 0 && categoriesArray
          .map(({ id, name }) => <li data-testid="category" key={ id }>{name}</li>)}
      </ol>
    );
  }
}

CategoriesList.propTypes = {
  categoriesArray: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CategoriesList;
